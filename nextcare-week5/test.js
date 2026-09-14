const fs=require('fs');
const html=fs.readFileSync('index.html','utf8');
const js=fs.readFileSync('app.js','utf8');
const checks=[
  ['fictional demo label',/FICTIONAL DEMO/.test(html)],
  ['clinical boundary',/does not diagnose/.test(html)],
  ['structured owner field',/Owner/.test(html)],
  ['deadline field',/Deadline/.test(html)],
  ['barrier field',/Barrier/.test(html)],
  ['two-attempt escalation',/attempts>=2/.test(js)],
  ['unresolved human acceptance',/STILL UNRESOLVED/.test(js)],
  ['simulated AI label',/SIMULATED AI OUTPUT/.test(html)]
];
let failed=0;for(const [name,ok] of checks){console.log(`${ok?'PASS':'FAIL'}: ${name}`);if(!ok)failed++;}
process.exit(failed?1:0);
