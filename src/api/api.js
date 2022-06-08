import {HTTP} from "@/api/http-common";

export const API = {
    getAllRows: function () {
        return HTTP.get(
            'http://www.filltext.com/?rows=50&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}');
    },
}