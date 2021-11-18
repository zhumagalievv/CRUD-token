var addCryptos = document.getElementById('addCrypto');
var tbody = document.getElementById('tbody');

function openFormTab(evt, tokenName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("crudTokenForm");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tokenName).style.display = "block";
    evt.currentTarget.className += " active";
}

function addcrypto(){
  var tokenName = document.getElementById('addCryptoTokenName').value
  var tokenPrice = document.getElementById('addCryptoTokenPrice').value
  var tokenMarketCap = document.getElementById('addCryptoTokenMarketCap').value
  var tokenImgURL = document.getElementById('addCryptoTokenImgUrl').value
  // ---------------------
  var table_tr  = document.createElement('tr'); 
  var table_th = document.createElement('th');
  var table_td1 = document.createElement('td');
  var table_td2 = document.createElement('td');
  var table_td3 = document.createElement('td');
  var lastID = tbody.querySelectorAll('th')
  var styles = {
    'margin': '0',
    'display': 'inline-block'
  }
  var imgInTd = document.createElement('img');
  tbody.appendChild(table_tr);
  table_tr.appendChild(table_th);
  table_th.setAttribute('scope', 'row')



  // Set Token ID
  table_th.innerHTML = +1 + +lastID[lastID.length - 1].textContent;
  table_tr.appendChild(table_td1);

  var p = document.createElement('p');
  table_td1.appendChild(imgInTd);
  // Set IMG URL
  imgInTd.src = tokenImgURL;
  table_td1.appendChild(p);
  // Set Token Name
  p.innerHTML = tokenName;
  Object.assign(p.style, styles);

  // td2
  table_tr.appendChild(table_td2);

  table_td2.innerHTML = '$'+tokenPrice;
  // Set Token Price
  table_tr.appendChild(table_td3);
  // Set Market Cap
  table_td3.innerHTML = '$'+tokenMarketCap;
}


function updateTokenData(){
  var token_id = document.getElementById('updateTokenId').value
  var token_price = document.getElementById('updateTokenPrice').value
  var token_market_cap = document.getElementById('updateTokenMarketCap').value

  var rows = document.getElementsByTagName("table")[0].rows;
  var last = rows[token_id];
  var price = last.cells[2];
  var marketCap = last.cells[3];
  price.innerHTML = '$'+token_price
  marketCap.innerHTML = '$'+token_market_cap
}



// this function remove token only 1 time, if you want that this function work correctly reload page after every deleting token
function deleteToken(){
  var id = document.getElementById('deleteTokenId').value
  var allID = tbody.querySelectorAll('tr');
  allID[id-1].remove()
}