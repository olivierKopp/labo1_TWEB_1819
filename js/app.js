var followed = 0;
function toggleFollow() {
	if (followed == 0){
		followed = 1;
		document.getElementById('button-follow').style['display'] = 'none';
		document.getElementById('button-following').style['display'] = 'inline-block';
	}
	else{
		followed = 0;
		document.getElementById('button-follow').style['display'] = 'inline-block';
		document.getElementById('button-following').style['display'] = 'none';
	}
 }