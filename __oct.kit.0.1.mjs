  
  
  import { Octokit } from "https://esm.sh/@octokit/core";
  const VENTAB = await fetch('https://ventab.github.io');
  let html = await VENTAB.text();
  let _f = f => 'function' == typeof f;
  
  
  class AuthApp {
    
    constructor(){
      
      this.ready = Octokit ? !0 : !1;
      ventab.page = html;
      
      this.au = (p, r) => ventab.authAppSetting(p, r) ||{};
      this.oct = au => new Octokit({ auth: au.auth || '' });
      
      this.req = (au, act, f) => {
        au.path = f ? f : au.path;
        
        return this.oct(au).request(`${act.toUpperCase()} /repos/${au.owner}/${au.repo}/contents/${au.path}`, {
          ...au,
          headers: {
            'X-GitHub-Api-Version': '2022-11-28'
          }
        });
        
      };
    }
    
    _create(path, msg, cb, repo){
      let o = this.au(path, repo);
      o.content = btoa(msg);
      o.message = '';
      this.req(o, 'put').then(cb);
    }
    _read(path, cb, repo){
     this.req(this.au(path, repo), 'get'). then(res => {
        cb(atob(res.data.content), res);
      }); 
    }
    _update(path, msg, sha, cb, repo){
      let o = this.au(path, repo);
      o.content = btoa(msg);
      o.message = '';
      o.sha = sha;
      this.req(o, 'put').then(cb);
    }
    _delete(path, sha, cb, repo){
      let o = this.au(path, repo);
      o.message = '';
      o.sha = sha;
      this.req(o, 'delete').then(cb);
    }
  }
 
 export const octokit = c => new AuthApp(c||{});