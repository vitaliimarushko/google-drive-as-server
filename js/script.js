const byId = id => document.getElementById(id);

const loadContent = async () => {
  let content = null;
  const contentDataRef = byId('app-content-data');
  const requestParams = {
    url: 'data/lorem.txt',
    timeout: 10000,
    headers: {
      'Cache-Control': 'no-cache',
    },
    responseType: 'text',
  };

  try {
    const response = await axios(requestParams) || {};
    content = response?.request?.responseText || '';
  } catch (ex) {
    console.error(ex);
    return false;
  }

  contentDataRef.innerText = content;
};

const loadedCb = () => {
  byId('app-get-content-btn').addEventListener('click', loadContent);
};

document.addEventListener('DOMContentLoaded', loadedCb, false);
