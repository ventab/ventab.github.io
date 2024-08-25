  import { Octokit } from "https://esm.sh/@octokit/core";
  



let utad = await ventab.utad('utad');
utad = await utad.text();




    
  class _828255 {
    
    constructor(o){
this.o=o;
o.utad=utad;
this.content = c => this.o.isArr(c) ? c[0]: btoa(c);
this.ready = Octokit ? !0 : !1;
      this.au = (p,r,nam) => {if(!p){this.o.err(`path required in '${nam}' function`)}
        return o._828255_(p, r,k=>o._828255(k,!0),nam)||{}};
      this.oct = au => new Octokit({ auth: au.auth || '' });
      
      this.req = (au, act, cb,f) => {
        au.path = f ? f : au.path;
        
         this.oct(au).request(`${act.toUpperCase()} /repos/${au.owner}/${au.repo}/contents/${au.path}`, {
          ...au,
          headers: {
            'X-GitHub-Api-Version': '2022-11-28'
          }
        }).then(cb).catch(cb);
        
      };
    }
    
    create(path, msg, cb, repo){
      let o = this.au(path, repo, 'create');
      o.content = this.content(msg);
      o.message = '';
      this.req(o, 'put',cb);
    }
    read(path, cb, repo){
     this.req(this.au(path, repo,'read'), 'get',res => {
        cb(res,atob(res.data.content));
      }); 
    }
    update(path, msg, sha, cb, repo){
      let o = this.au(path, repo,'update');
      o.content = content(msg);
      o.message = '';
      o.sha = sha;
      this.req(o, 'put',cb);
    }
    delete(path, sha, cb, repo){
      let o = this.au(path, repo,'delete');
      o.message = '';
      o.sha = sha;
      this.req(o, 'delete',cb);
    }
  }
 
 export const __828255 = c => new _828255(c||{});
