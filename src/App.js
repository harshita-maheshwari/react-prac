import React from 'react';
import Button from './components/Button.js';
// import logo from './logo.svg';
import './App.scss';
import './Styles/components.scss';
import Tabs from './components/Tabs.js';
function App() {

  return (
    <div className="App">
      <div className="doc-wrapper">
        <div className="container">
          <div className="card section-buttons">
            <h3 className="section-title">Buttons</h3>
            <h5 className="card-title">Primary Button</h5>
            <div className="card-body">
              <Button title="click me!" size="lg" />
              <Button title="click me!" />
              <Button title="click me!" size="sm" />
              <Button title="click me!" disabled size="sm" />
            </div>
            <h4 className="code-title">HTML Code Example</h4>
            <div className="code-block">
              <code className="pre" disabled="">
                &lt;Button title="click me!" size="lg" /&gt; <br />
                &lt;Button title="click me!" /&gt; <br />
                &lt;Button title="click me!" size="sm" /&gt; <br />
                &lt;Button title="click me!" disabled size="sm" /&gt; <br />
              </code>
            </div>

            <h5 className="card-title">Secondary Button</h5>
            <div className="card-body">
              <Button title="click me!" size="lg" type="secondary" />
              <Button title="click me!" type="secondary" />
              <Button title="click me!" size="sm" type="secondary" />
              <Button title="click me!" disabled size="sm" type="secondary" />
            </div>
            <h4 className="code-title">HTML Code Example</h4>
            <div className="code-block">
              <code className="pre" disabled="">
                &lt;Button title="click me!" size="lg" type="secondary"/&gt; <br />
                &lt;Button title="click me!" type="secondary"/&gt; <br />
                &lt;Button title="click me!" size="sm" type="secondary"/&gt; <br />
                &lt;Button title="click me!" size="sm" type="secondary" disabled/&gt; <br />
              </code>
            </div>

            <h5 className="card-title">Tertiary Button</h5>
            <div className="card-body">
              <Button title="click me!" size="lg" type="tertiary" />
              <Button title="click me!" type="tertiary" />
              <Button title="click me!" size="sm" type="tertiary" />
              <Button title="click me!" disabled size="sm" type="tertiary" />
            </div>
            <h4 className="code-title">HTML Code Example</h4>
            <div className="code-block">
              <code className="pre" disabled="">
                &lt;Button title="click me!" size="lg" type="tertiary"/&gt; <br />
                &lt;Button title="click me!" type="tertiary"/&gt; <br />
                &lt;Button title="click me!" size="sm" type="tertiary"/&gt; <br />
                &lt;Button title="click me!" size="sm" type="tertiary" disabled/&gt; <br />
              </code>
            </div>
          </div>
          <div className="card section-tabs">
            <h3 className="section-title">Tabs</h3>
            <h5 className="card-title">Primary Tabs</h5>
            <div className="card-body">
              <Tabs />
            </div>
            <h4 className="code-title">HTML Code Example</h4>
            <div className="code-block">
              <code className="pre" disabled="">
                &lt;Button title="click me!" size="lg" /&gt; <br />
                &lt;Button title="click me!" /&gt; <br />
                &lt;Button title="click me!" size="sm" /&gt; <br />
                &lt;Button title="click me!" disabled size="sm" /&gt; <br />
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
