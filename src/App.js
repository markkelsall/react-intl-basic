import React, { useState, useEffect } from 'react';
import { IntlProvider, FormattedMessage, FormattedNumber, addLocaleData} from 'react-intl';
import './App.css';

let locale = new URLSearchParams(window.location.search).get('lang');

function App() {
  
  const [localeDataLoaded, setLocaleDataLoaded] = useState(null);
  
  let translations = {
    "key1": "Hello {name}, you have {count, number} messages"
  };

  useEffect(() => {
    import(`react-intl/locale-data/${locale}`).then(localeData => {
      addLocaleData(localeData.default);
      setLocaleDataLoaded(true);
    });
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
