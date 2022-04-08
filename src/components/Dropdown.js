import Currency from './Currency';
import Win from './Win';
import Dropdown from 'react-bootstrap/Dropdown';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function DropdownComponent() {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Choose an app...
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/Currency" src={<Currency />}>
            Currency Converter
          </Dropdown.Item>
          <Dropdown.Item href="/Win">Win! card game</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <BrowserRouter>
        <div className="routeContainer">
          <Routes>
            <Route path="/Currency" element={<Currency />} />
            <Route path="/Win" element={<Win />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default DropdownComponent;
