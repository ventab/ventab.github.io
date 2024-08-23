  import { Octokit } from "https://esm.sh/@octokit/core";
  



let utad = await ventab.utad('utad');
utad = await utad.text();




    
  class _828255 {
    
    constructor(o){

o.utad=utad;

      
      
      this.ready = Octokit ? !0 : !1;
      
      
      this.au = (p, r) => o._828255_(p, r,(k,t)=>o._828255(k,t)) ||{};
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
    
    create(path, msg, cb, repo){
      let o = this.au(path, repo);
      o.content = btoa(msg);
      o.message = '';
      this.req(o, 'put').then(cb);
    }
    read(path, cb, repo){
     this.req(this.au(path, repo), 'get'). then(res => {
        cb(atob(res.data.content), res);
      }); 
    }
    update(path, msg, sha, cb, repo){
      let o = this.au(path, repo);
      o.content = btoa(msg);
      o.message = '';
      o.sha = sha;
      this.req(o, 'put').then(cb);
    }
    delete(path, sha, cb, repo){
      let o = this.au(path, repo);
      o.message = '';
      o.sha = sha;
      this.req(o, 'delete').then(cb);
    }
  }
 
 export const octokit = c => new _828255(c||{});
