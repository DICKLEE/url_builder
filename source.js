var li_source = JSON.parse(data);

if( category == 1){ 
	var memo = "請選擇品牌";
	var select_id = "source";
} else if (category == 2) {
    var memo = "請選擇通路";
	var select_id = "medium";
} else {
    var memo = "請選擇通路";
	var select_id = "medium";
}


document.write("<select id="+ select_id +" onchange='build_url()'><option value='' disabled selected>請下拉</option>")
for(i = 0; i < li_source.length; i++){

	document.write("<option value="+ li_source[i].id + ">" + li_source[i].name + "</option>");
}

document.write("</select><label>"+ memo +"</label>");
