const state={attempts:0,barrier:'Transportation',accepted:false};
const byId=id=>document.getElementById(id);
function render(){
  byId('attemptCount').textContent=state.attempts;
  byId('barrierText').textContent=state.barrier;
  const escalated=state.attempts>=2;
  byId('attemptBtn').disabled=escalated;
  byId('acceptBtn').disabled=!escalated||state.accepted;
  byId('barrierSelect').disabled=state.accepted;
  if(escalated){
    byId('statusText').textContent=state.accepted?'HUMAN NAVIGATOR ACCEPTED — UNRESOLVED':'HUMAN REVIEW REQUIRED';
    byId('escalationText').textContent='Human navigator review';
    byId('navStatus').textContent=state.accepted?'ACCEPTED — STILL UNRESOLVED':'CASE BLOCKED';
    byId('navStatus').className='nav-status '+(state.accepted?'accepted':'blocked');
    byId('navMessage').textContent=state.accepted?'A navigator owns the handoff, but the clinical next action is not yet confirmed.':'Two unsuccessful automated attempts reached the limit. Automation is stopped and human review is required.';
    byId('aiText').textContent=`This existing screening result is not a diagnosis. The current next action remains confirmatory ophthalmology evaluation. ${state.barrier} is recorded as the barrier. Because two contact attempts were unsuccessful, automated follow-up has stopped and a human navigator must review the case.`;
  }else{
    byId('statusText').textContent=state.barrier==='None'?'IN PROGRESS':'ACTION REQUIRED';
    byId('escalationText').textContent='Not required';
    byId('navStatus').textContent='CASE OPEN'; byId('navStatus').className='nav-status';
    byId('navMessage').textContent='No human review required yet.';
    byId('aiText').textContent=`This existing screening result needs a provider-defined follow-up evaluation. It is not a diagnosis. The next step is confirmatory ophthalmology evaluation. Current recorded barrier: ${state.barrier}.`;
  }
  byId('attemptHistory').innerHTML='<strong>Attempt history</strong>'+ (state.attempts===0?'<p>No attempts recorded.</p>':Array.from({length:state.attempts},(_,i)=>`<p>Attempt ${i+1} — unsuccessful automated contact</p>`).join(''));
}
byId('barrierSelect').addEventListener('change',e=>{state.barrier=e.target.value;render()});
byId('attemptBtn').addEventListener('click',()=>{if(state.attempts<2){state.attempts++;render()}});
byId('acceptBtn').addEventListener('click',()=>{state.accepted=true;render()});
byId('resetBtn').addEventListener('click',()=>{state.attempts=0;state.accepted=false;state.barrier='Transportation';byId('barrierSelect').value=state.barrier;render()});
render();
