import { Grid, Stack, Typography } from '@mui/material';
import { Layout } from '../components/layout/layout';
import { MapWidget } from '../containers/map-widget';
import { useState } from 'react';
import { JsonBuilding } from '@shared-utils';
import { BarChartWidget } from '../containers/bar-chart-widget';
import Button from '@mui/material/Button';

export const LandingPage = () => {
  const [selectedBuilding, setSelectedBuilding] = useState<JsonBuilding>();

  return (
    <Layout>
      <Stack spacing={2}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Stack spacing={2}>
              <Typography variant="h4" component="h1">
                Energy Consumption Dashboard
              </Typography>
              <Typography variant="subtitle2">
                {selectedBuilding?.name ||
                  'Please select a Building from the map'}
              </Typography>
              {selectedBuilding && (
                <Button
                  onClick={() => setSelectedBuilding(undefined)}
                  fullWidth
                >
                  Clear Selection
                </Button>
              )}
            </Stack>
          </Grid>
          <Grid item xs={12} md={8}>
            <MapWidget
              onBuildingSelect={setSelectedBuilding}
              selectedBuilding={selectedBuilding}
            />
          </Grid>
        </Grid>
        <BarChartWidget selectedBuilding={selectedBuilding} />
      </Stack>
    </Layout>
  );
};
