# API

Endpoint là URL Web App kết thúc bằng `/exec`. Response luôn có `success`, `message`, `data`, `timestamp`; lỗi có thêm `errorCode`.

## Đọc

- `GET ?action=health` (không cần token)
- `GET ?action=list&entity=trips&token=...`
- `GET ?action=list&entity=expenses&tripId=TRIP_x&token=...`
- `GET ?action=get&entity=trips&id=TRIP_x&token=...`
- `GET ?action=getDashboard&tripId=TRIP_x&token=...`
- `GET ?action=getTripDetails&tripId=TRIP_x&token=...`
- `GET ?action=exportTrip&tripId=TRIP_x&token=...`

## Ghi

POST với `Content-Type: text/plain;charset=utf-8` và JSON body:

```js
fetch(API_URL, {method:'POST', headers:{'Content-Type':'text/plain;charset=utf-8'}, body:JSON.stringify({action:'create', entity:'trips', token:ACCESS_TOKEN, data:{Name:'Huế',MainDestination:'Huế',StartDate:'2026-09-01',EndDate:'2026-09-03'}})});
```

Action: `setup`, `create`, `update`, `delete`, `restore`, `duplicateTrip`. Entity: `trips`, `itinerary`, `places`, `transport`, `accommodation`, `expenses`, `tasks`, `packing`, `travelers`, `journal`.

Mã lỗi phổ biến: `UNAUTHORIZED`, `TOKEN_NOT_CONFIGURED`, `INVALID_ACTION`, `INVALID_ENTITY`, `VALIDATION_ERROR`, `INVALID_DATE_RANGE`, `NOT_FOUND`, `LOCK_TIMEOUT`, `INTERNAL_ERROR`.
