<script type="text/javascript">
function login()
{
  var username=document.getElementById("uname");
  var psword=document.getElementById("Password");
  var k=0;
  if(username.value.trim()=="")
  {
    document.getElementById("label1").style.visibility="visible";
  }
  else {
      document.getElementById("label1").style.visibility="hidden";k++;
  }
  if(psword.value.trim()=="")
  {
    document.getElementById("label2").style.visibility="visible";
  }
  else {
      document.getElementById("label2").style.visibility="hidden";k++;
  }
  if(k==2)
  alert("You are Sucessfully Loggedin");

}
</script>
