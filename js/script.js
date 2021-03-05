// const byId = id => document.getElementById(id);

const csvToJson = csv => {
  const lines = csv.split('\n');
  const result = [];
  const headers = lines[0].split(',');

  for (let i = 1; i < lines.length - 1; i++) {
    const obj = {};
    const currentLine = lines[i].split(',');

    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentLine[j];
    }

    result.push(obj);
  }

  return result;
};

const makeRequest = async url => {
  let content = null;
  const requestParams = {
    url,
    timeout: 30000,
    headers: {
      'Cache-Control': 'no-cache',
    },
    responseType: 'text',
  };

  try {
    const response = await axios(requestParams) || {};
    content = response.data || null;
  } catch (ex) {
    console.error(ex);
    return false;
  }

  return content;
};

// const loadContent = async () => {
//   const contentDataRef = byId('app-content-data');
//   const content = await makeRequest('data/lorem.txt');
//
//   contentDataRef.innerText = content;
// };

const loadedCb = async () => {
  // byId('app-get-content-btn').addEventListener('click', loadContent);

  const tableRow = document.getElementsByClassName('app-header-row')[0];
  const content = await makeRequest('data/catalog');
  const csv = csvToJson(content);
  let htmlContent = '';

  for (const csvElement of csv) {
    const tr = `
      <tr>
        <td>
          ${csvElement.category}
        </td>
        <td>
          ${csvElement.name}
        </td>
        <td>
          ${csvElement.price}
        </td>
        <td>
          ${csvElement.description || '-'}
        </td>
      </tr>
    `;

    htmlContent += tr;
  }

  tableRow.insertAdjacentHTML('afterend', htmlContent);
};

document.addEventListener('DOMContentLoaded', loadedCb, false);
