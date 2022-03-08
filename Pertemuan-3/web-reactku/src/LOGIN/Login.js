import React from "react";
import './login.css';

const Login = () =>{
    return (
        <div class="kotak_login">
            <center><h2>Form Login</h2></center>
            <center> <h1 class="tulisan_login">Tugas Pertemuan Ketiga</h1></center>

            <form>
                <div class="form-inline">
                    <label>Username</label>
                    <input type="text" name="username" class="form_login" placeholder="masukkan username"/>
                </div>

                <div class="form-inline">
                    <label>Password</label>
                    <input type="password" name="password" class="form_login" placeholder="masukkan password"/>
                </div>

                <input type="submit" class="tombol_login" value="LOGIN"/>

               <center> <p><input type='checkbox' name='remember_me' value='Remember Me' />Remember Me</p></center>

                
                <center><input type="submit" class="tombol_cancel" value="Cancel"/></center>

                <br/>
                <br/>
               
            </form>
            
        </div>
    );
}

export default Login;