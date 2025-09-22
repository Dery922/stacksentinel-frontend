<form className="x-login-form">
<h2 style={{fontWeight: 700,}}>Register for StackSentinel</h2>
<div style={{display:"flex", justifyContent:"center", alignItems:"center"}} className="x-login-form-div">
<p>Don't have an account? </p> <span><a href="">Log in</a></span>
</div>
<input type="text" placeholder=" Email" />
<input type="password" placeholder="Password" />
<button type="submit" className="btn-g-stack">Create Account</button>
<p onClick={handleOpen} className="x-forgot">
 Forgot password?
</p>
</form>