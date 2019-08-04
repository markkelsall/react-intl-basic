import React, { useState, useEffect } from 'react';
import { IntlProvider, FormattedMessage, FormattedNumber, addLocaleData} from 'react-intl';
import './App.css';

function App() {
  const locale = 'de';
  const [localeDataLoaded, setLoacleDataLoaded] = useState(null);

  let translations = {
    "key1": "Hello {name}, you have {count, number} messages"
  };

  useEffect(() => {
    addLocaleData(require(`react-intl/locale-data/${locale}`));
    setLoacleDataLoaded(true);
  }, []);

  return (
    localeDataLoaded ? 
    <IntlProvider locale={locale} messages={translations}>
      <div className="App">
        <header className="App-header">
          <FormattedMessage id={"key1"} values={{name: 'Fred', count: 1000}}/>
          <FormattedNumber style="currency" currency="EUR" value="1000.99" />
        </header>
      </div> 
    </IntlProvider> : null
  );
}

export default App;
