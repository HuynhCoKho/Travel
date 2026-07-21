import{api}from'./api.js';

const observer=new MutationObserver(()=>{
  const form=document.querySelector('#row-form');
  if(!form||!location.hash.startsWith('#/expenses')||form.dataset.fxReady)return;
  form.dataset.fxReady='1';
  const currency=form.elements.Currency,amount=form.elements.Amount;
  if(!currency||!amount)return;
  currency.value=currency.value||'VND';
  const rate=document.createElement('label');
  rate.innerHTML=`Tỷ giá sang VND <input name="ExchangeRate" type="number" min="0" step="any" value="${form.dataset.exchangeRate||1}"><small>Tỷ giá tham khảo; bạn có thể sửa thủ công.</small>`;
  const converted=document.createElement('label');
  converted.innerHTML=`Tương đương VND <input name="ConvertedAmount" type="number" min="0" step="1" readonly value="${form.dataset.convertedAmount||0}">`;
  const button=document.createElement('button');button.type='button';button.className='ghost';button.textContent='↻ Lấy tỷ giá mới nhất';
  currency.closest('label').after(rate,converted,button);
  const update=()=>{converted.querySelector('input').value=Math.round((Number(amount.value)||0)*(Number(rate.querySelector('input').value)||0))};
  amount.addEventListener('input',update);rate.querySelector('input').addEventListener('input',update);
  button.onclick=async()=>{button.disabled=true;button.textContent='Đang lấy tỷ giá…';try{const x=await api.exchangeRate(currency.value.trim().toUpperCase()||'VND');rate.querySelector('input').value=x.rate;update();button.textContent=`Đã cập nhật ${x.date||''}`}catch(e){button.textContent='Không lấy được · nhập thủ công'}finally{button.disabled=false}};
  currency.addEventListener('change',()=>button.click());
  update();
});
observer.observe(document.documentElement,{childList:true,subtree:true});
