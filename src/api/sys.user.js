import request from "@/plugin/axios";

export function GetUserInfo(data) {
  return request({
    url: "/userInfo",
    method: "get",
    data
  });
}
