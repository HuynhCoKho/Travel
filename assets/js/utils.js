export const esc=v=>String(v??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
export const number=v=>new Intl.NumberFormat('vi-VN',{maximumFractionDigits:0}).format(Number(v)||0);
export const money=(v,c='VND')=>`${number(v)} ${c}`;
export const date=v=>{if(!v)return'';const d=String(v).slice(0,10).split('-');return d.length===3?`${d[2]}/${d[1]}/${d[0]}`:String(v)};
export const fields=f=>f.map(x=>`<label>${x.label}<${x.type==='textarea'?'textarea':'input'} name="${x.name}" ${x.type&&x.type!=='textarea'?`type="${x.type}"`:''} ${x.required?'required':''} value="${x.type==='textarea'?'':esc(x.value)}">${x.type==='textarea'?esc(x.value):''}${x.type==='textarea'?'</textarea>':''}</label>`).join('');
export const csv=rows=>rows.map(r=>r.map(v=>`"${String(v??'').replace(/"/g,'""')}"`).join(',')).join('\n');
