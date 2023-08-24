// Gom các reducer để xử lý khi action gửi đến
/* - combineReducers: gom các reducers lại thành một reducer duy nhất để quản lý trạng thái ứng dụng
   - applyMiddleware: cho phép can thiệp vào quá trình gửi và xử lý các action như bất đồng bộ, ghi nhật ký, gửi dữ liệu lên server*/
import appReducer from "./appReducer";
import { combineReducers, applyMiddleware } from "redux";
const rootReducer = combineReducers({
  app: appReducer,
});

export default rootReducer;
