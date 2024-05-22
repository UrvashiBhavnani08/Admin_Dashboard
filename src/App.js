import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Customer from "./scenes/customer";
import Cash from "./scenes/cash";
import Account from "./scenes/account";
import BankCharges from "./scenes/bankcharges";
import Capital from "./scenes/capital";
import Contract from "./scenes/contract";
import ExportSale from "./scenes/exportsale";
import gstr1 from "./scenes/gstr1";
import itc from "./scenes/itc";
import Journal from "./scenes/journal";
import Payment from "./scenes/payment";
import Supplies from "./scenes/supplies";
import TOS from "./scenes/tos";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import DeleteAll from "../src/components/DeleteAll";
import UpdateData from "../src/components/Updatedata";
import SingleDataView from "../src/components/SingleDataView";
import InserData from "../src/components/InsertData";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/customer" element={<Customer />} />
              <Route path="/cash" element={<Cash />} />
              <Route path="/capital" element={<Capital />} />
              <Route path="/account" element={<Account />} />
              <Route path="/bankcharges" element={<BankCharges />} />
              <Route path="/contract" element={<Contract />} />
              <Route path="/exportsale" element={<ExportSale />} />
              <Route path="/gstr1" element={<gstr1 />} />
              <Route path="/itc" element={<itc />} />
              <Route path="/journal" element={<Journal />} />
              <Route path="/tos" element={<TOS />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/supplies" element={<Supplies />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/delete-all" component={DeleteAll} />
        <Route path="/update/:id" component={UpdateData} />
        <Route path="/insert" component={InserData} />
        <Route path="/data" component={DataView} />
        <Route path="/data/:id" component={SingleDataView} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
