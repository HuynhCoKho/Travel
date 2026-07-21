export const esc=v=>String(v??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
export const number=v=>new Intl.NumberFormat('vi-VN',{maximumFractionDigits:0}).format(Number(v)||0);
export const money=(v,c='VND')=>`${number(v)} ${c}`;
export const dateInput=v=>{if(!v)return'';const s=String(v);if(/^\d{4}-\d{2}-\d{2}$/.test(s))return s;const d=new Date(s);if(Number.isNaN(d.getTime()))return s.slice(0,10);const p=Object.fromEntries(new Intl.DateTimeFormat('en-US',{timeZone:'Asia/Ho_Chi_Minh',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(d).map(x=>[x.type,x.value]));return `${p.year}-${p.month}-${p.day}`};
export const date=v=>{const s=dateInput(v);if(!s)return'';const d=s.split('-');return d.length===3?`${d[2]}/${d[1]}/${d[0]}`:s};
export const fields=f=>f.map(x=>`<label>${x.label}<${x.type==='textarea'?'textarea':'input'} name="${x.name}" ${x.type&&x.type!=='textarea'?`type="${x.type}"`:''} ${x.required?'required':''} value="${x.type==='textarea'?'':esc(x.value)}">${x.type==='textarea'?esc(x.value):''}${x.type==='textarea'?'</textarea>':''}</label>`).join('');
export const csv=rows=>rows.map(r=>r.map(v=>`"${String(v??'').replace(/"/g,'""')}"`).join(',')).join('\n');
