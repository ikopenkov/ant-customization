import 'src/core/polyfills';

import React from 'react';
import ReactDOM from 'react-dom';
import { ComponentForTest } from 'src/ComponentForTest';
import { initialize } from 'src/core/initialisation';

function render() {
    const reactContainer = document.createElement('div');
    reactContainer.className = 'app';
    document.body.appendChild(reactContainer);

    ReactDOM.render(<ComponentForTest />, reactContainer);
}

initialize().then(render);
