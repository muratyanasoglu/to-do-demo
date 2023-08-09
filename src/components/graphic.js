import React from 'react';
import { List, Typography } from 'antd';
import { Line } from '@ant-design/charts';
import './style.css';

const Graphic = () => {
  // Sample data for the most contributors list
  const contributors = [
    'hasankarahaliloglu',
    'enesbugragurbuz',
    'zehragokce',
    'muratyanasoglu',
  ];

  // Sample data for the Line chart
  const chartData = [
    { year: '2021', value: 3 },
    { year: '2022', value: 4 },
    { year: '2023', value: 3.5 },
    // ... more data ...
  ];

  // Configuration for the Line chart
  const chartConfig = {
    data: chartData,
    height: 200,
    xField: 'year',
    yField: 'value',
    point: {
      size: 5,
      shape: 'diamond',
    },
  };

  return (
    <div className="container">
      <div className="graphic-container">
        <div className="chart-section">
          <Line {...chartConfig} /> {/* Use the Line chart here */}
        </div>
        <div className="contributors-section">
          <Typography.Title level={3}>The Most Contributors to the Projects</Typography.Title>
          <List
            size="small"
            bordered
            dataSource={contributors}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
        </div>
      </div>
    </div>
  );
};

export default Graphic;
