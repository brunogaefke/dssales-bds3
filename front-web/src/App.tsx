import { useState } from 'react';
import './App.css';
import Filter from './components/filter';
import Header from './components/header';
import PieChartCard from './components/pie-chart-card';
import SalesByDate from './components/sales-by-date';
import SalesSummary from './components/Sales-Summary';
import SalesTable from './components/sales-table';
import { FilterData } from './types';

function App() {
  const [filterData, setFilterData] = useState<FilterData>();

  const onFilterChange = (filter: FilterData) => {
    setFilterData(filter);
  };

  return (
    <>
      <Header />
      <div className="app-container">
        <Filter onFilterChange={onFilterChange} />
        <SalesByDate filterData={filterData} />
        <div className="sales-overview-container">
          <SalesSummary />
          <PieChartCard
            name="Lojas"
            labels={['Uberlândia', 'Araguari', 'Uberaba']}
            series={[40, 30, 30]}
          />
          <PieChartCard
            name="Pagamentos"
            labels={['Crédito', 'Débito', 'Dinheiro']}
            series={[40, 40, 20]}
          />
        </div>
        <SalesTable />
      </div>
    </>
  );
}

export default App;
