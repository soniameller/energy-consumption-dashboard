import { ErrorAlert } from '../components/layout/feedback/error-alert';
import { Loading } from '../components/layout/feedback/loading';
import { useEnergyConsumptionQuery } from '../hooks/api-query';
import { JsonBuilding } from '@shared-utils';
import { BarChart } from '@mui/x-charts/BarChart';

interface BarChartWidgetParams {
  selectedBuilding?: JsonBuilding;
}

const colorPalette = [
  '#F27B77',
  '#506AD4',
  '#818EC0',
  '#F2D1B3',
  '#6B4226',
  '#A1D6E2',
  '#1995AD',
  '#9BC1BC',
  '#5CA4A9',
  '#E6EBE0',
  '#D9D2E9',
];

export const BarChartWidget = ({ selectedBuilding }: BarChartWidgetParams) => {
  const {
    energyConsumption = [],
    isLoading,
    isError,
  } = useEnergyConsumptionQuery();

  if (isLoading) {
    return <Loading text="Loading Chart" />;
  }

  if (isError) {
    return <ErrorAlert />;
  }

  const filteredEnergyConsumption = selectedBuilding
    ? energyConsumption.filter(
        (item) => item.metadata.cpe === selectedBuilding.cpe
      )
    : energyConsumption;

  const uniqueMonthsSet = new Set(
    filteredEnergyConsumption.map((item) => item.month)
  );
  const uniqueMonths: string[] = Array.from(uniqueMonthsSet);

  const uniqueBuildings = new Set(
    filteredEnergyConsumption.map((item) => item.metadata.cpe)
  );

  const series = Array.from(uniqueBuildings).map((building, i) => {
    const filtered = filteredEnergyConsumption.filter(
      (item) => item.metadata.cpe === building
    );
    return {
      data: filtered.map((item) => item.totalEnergyConsumption),
      label: filtered[0].metadata.name,
      color: colorPalette[i % colorPalette.length],
    };
  });

  return (
    <div style={{ width: '100%', height: '700px' }}>
      <BarChart
        xAxis={[{ scaleType: 'band', data: uniqueMonths }]}
        series={series}
        height={300}
      />
    </div>
  );
};
