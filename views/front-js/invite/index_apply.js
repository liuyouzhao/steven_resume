var index_phonenum_check_ok = false;
var index_authcode_check_ok = false;
var index_realname_check_ok = false;

function checkRate(number) {
     var re = /^[0-9]+.?[0-9]$/;
    
     if (!re.test(number)) {
        return false;
     }
     return true;
}

function initCheckApplyEnable() {
	var phonenum = document.getElementById("phonenum");
	var authcode = document.getElementById("authcode");
	var realname = document.getElementById("realname");
	if(phonenum.value.length != 0) {
		index_phonenum_onblur();
	}
	if(authcode.value.length != 0) {
		index_authcode_onblur();
	}
	if(realname.value.length != 0) {
		index_realname_onblur();
	}
	checkApplyEnable();
}

function checkApplyEnable() {
	if(index_phonenum_check_ok && index_authcode_check_ok && index_realname_check_ok) {
		var button = document.getElementById("apply_button");
		button.style.backgroundColor = "#8ec31f";
		button.disabled = false;
	}
}


function index_phonenum_onblur() {
	var phonenum = document.getElementById("phonenum");
	var img = document.getElementById("phonenum_check_img");

	if(!checkRate(phonenum.value)) {
		img.src = "notok.png";
	}
	else if(phonenum.value.length != 11) {
		img.src = "notok.png";
	}
	else if(phonenum.value.length == 11) {
		img.src = "ok.png";
		index_phonenum_check_ok = true;
		checkApplyEnable();
		return;
	}
	index_phonenum_check_ok = false;
}

function index_authcode_onblur() {
	var authcode = document.getElementById("authcode");
	var img = document.getElementById("authcode_check_img");

	if(!checkRate(authcode.value)) {
		img.src = "notok.png";
	}
	else if(authcode.value.length != 6) {
		img.src = "notok.png";
	}
	else {
		img.src = "ok.png";
		index_authcode_check_ok = true;
		checkApplyEnable();
		return;
	}
	index_authcode_check_ok = false;
}

function index_realname_onblur() {
	var realname = document.getElementById("realname");
	var img = document.getElementById("realname_check_img");
	if(realname.value.length <= 0) {
		img.src = "notok.png";
	}
	else {
		img.src = "ok.png";
		index_realname_check_ok = true;
		checkApplyEnable();
		return;
	}
	index_realname_check_ok = false;
}

initCheckApplyEnable();