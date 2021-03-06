import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CodewordsetService {


    constructor(private httpclient: HttpClient) { }

    getCodewordSet() {
        return this.httpclient.get("http://localhost:3000/codeword/getcodewordset", {
            headers: {
                token: window.localStorage.getItem('token')
            }
        })
    }

    getCodewords(data) {
        return this.httpclient.post("http://localhost:3000/codeword/getCodewords", {
            CodeWordSetKey: data
          } ,{
            headers: {
                token: window.localStorage.getItem('token')
            }
        })
    }
    saveCodewordSet(data) {
        return this.httpclient.post("http://localhost:3000/codeword/addcodewordset", {
            sendData: data
          } ,{
            headers: {
                token: window.localStorage.getItem('token')
            }
        })
    }

    saveCodewords(data) {
        return this.httpclient.post("http://localhost:3000/codeword/addnewcodewords", {
            sendData2: data
          } ,{
            headers: {
                token: window.localStorage.getItem('token')
            }
        })
    }
}
