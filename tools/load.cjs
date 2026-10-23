global.window=global;const root=require('path').join(__dirname,'..')+'/';
for (const f of ["icons","data","data-peoples-1","data-peoples-2","data-peoples-3","data-peoples-4","data-types","data-art","data-magic","prompts"]) require(root+f+'.js');
module.exports={leaves:()=>{const o=[];GROUP_ORDER.forEach(g=>GROUP_DEFS[g].subs.forEach(s=>s.subs.forEach(l=>o.push({gid:g,g:GROUP_DEFS[g],s,l}))));return o}};
