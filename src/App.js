import React from 'react';
import { ThemeProvider } from './themes/theme-context'; 
import Page from './components/Page'

const App = () => {
  return (
    <ThemeProvider>
      <Page />
    </ThemeProvider>
  )
} 

export default App;