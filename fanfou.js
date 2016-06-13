fanfou=new Object();fanfou.Timeline=function(){this.server="http://api.fanfou.com";if(typeof fanfou_name=="undefined"){this.name="";}else{this.name=fanfou_name;}if(typeof fanfou_count=="undefined"||isNaN(fanfou_count)){this.count=20;}else{this.count=parseInt(fanfou_count);}if(this.name==""){this.timeline="public";}else{if(typeof fanfou_timeline!="undefined"&&(fanfou_timeline=="friends"||fanfou_timeline=="public")){this.timeline=fanfou_timeline;}else{this.timeline="user";}}};fanfou.Timeline.prototype={getDate:function(_1){var _2=_1.split(" ");var _1=_2[1]+" "+_2[2]+", "+_2[5]+" "+_2[3];var _3=new Date();var _4=Date.parse(_1)-_3.getTimezoneOffset()*60*1000;return new Date(_4);},fullDate:function(_5){return _5.getFullYear()+"-"+(_5.getMonth()>=9?"":"0")+(_5.getMonth()+1)+"-"+(_5.getDate()>9?"":"0")+_5.getDate()+" "+(_5.getHours()>9?"":"0")+_5.getHours()+":"+(_5.getMinutes()>9?"":"0")+_5.getMinutes();},readableDate:function(_6){var _7=_6.valueOf();var _8=new Date();var _9=parseInt((_8.getTime()-_7)/1000);if(_9<60){return _9+" \u79d2\u524d";}else{if(_9<60*60){return (parseInt(_9/60)).toString()+" \u5206\u949f\u524d";}else{if(_9<60*60*24){return "\u7ea6 "+(parseInt(_9/3600)).toString()+" \u5c0f\u65f6\u524d";}else{return this.fullDate(_6);}}}},createName:function(_a){var _b=document.createElement("a");_b.href=_a.user.url;_b.title=_a.user.name;_b.target="_blank";_b.appendChild(document.createTextNode(_a.user.screen_name));return _b;},createText:function(_c){return document.createTextNode(_c.text);},createStamp:function(_d){var _e=document.createElement("a");var _f=this.getDate(_d.created_at);_e.appendChild(document.createTextNode(this.readableDate(_f)));_e.href="http://fanfou.com/statuses/"+_d.id;_e.className="stamp";_e.title=this.fullDate(_f);_e.target="_blank";return _e;},createLink:function(){var _10=document.createElement("li");var _11=document.createElement("a");_11.appendChild(document.createTextNode("\u66f4\u591a\u6d88\u606f"));switch(this.timeline){case "user":_11.href="http://fanfou.com/"+this.name;break;case "friends":_11.href="http://fanfou.com/message/"+this.name;break;case "public":_11.href="http://fanfou.com/browse";break;default:break;}_11.title="\u996d\u5426";_11.target="_blank";_10.appendChild(_11);_10.className="fanfou_statuses_more";return _10;},createBrand:function(){var _12=document.createElement("p");var _13=document.createElement("a");_13.href="http://fanfou.com/";_13.title="\u996d\u5426";_13.target="_blank";var img=document.createElement("img");img.src="http://static.fanfou.com/img/brand.gif";img.alt="\u996d\u5426";_13.appendChild(img);_12.appendChild(_13);return _12;},statuses:function(obj){if(obj.length==0){return false;}switch(this.timeline){case "user":var _16="fanfou_statuses_user"+obj[0].user.id;if(!document.getElementById(_16)){document.write("<div id=\""+_16+"\" class=\"fanfou_statuses\"></div>");}var _17=document.createElement("ul");for(var i=0;i<obj.length;i++){var _19=document.createElement("li");_19.appendChild(this.createText(obj[i]));_19.appendChild(document.createTextNode(" "));_19.appendChild(this.createStamp(obj[i]));_17.appendChild(_19);}break;case "friends":var _16="fanfou_statuses_friends";if(!document.getElementById(_16)){document.write("<div id=\""+_16+"\" class=\"fanfou_statuses\"></div>");}var _17=document.createElement("ul");for(var i=0;i<obj.length;i++){var _19=document.createElement("li");_19.appendChild(this.createName(obj[i]));_19.appendChild(document.createTextNode("\uff1a"));_19.appendChild(this.createText(obj[i]));_19.appendChild(document.createTextNode(" "));_19.appendChild(this.createStamp(obj[i]));_17.appendChild(_19);}break;case "public":var _16="fanfou_statuses_public";if(!document.getElementById(_16)){document.write("<div id=\""+_16+"\" class=\"fanfou_statuses\"></div>");}var _17=document.createElement("ul");for(var i=0;i<obj.length;i++){var _19=document.createElement("li");_19.appendChild(this.createName(obj[i]));_19.appendChild(document.createTextNode("\uff1a"));_19.appendChild(this.createText(obj[i]));_19.appendChild(document.createTextNode(" "));_19.appendChild(this.createStamp(obj[i]));_17.appendChild(_19);}break;default:break;}_17.appendChild(this.createLink());var _1a=this;setTimeout(function(){var _1b=document.getElementById(_16);_1b.appendChild(_17);_1b.appendChild(_1a.createBrand());},0);},createStatuses:function(_1c){switch(this.timeline){case "user":document.write("<script type=\"text/javascript\" charset=\"utf-8\" src=\""+this.server+"/statuses/user_timeline/"+this.name+".json?cb="+_1c+".statuses&amp;count="+this.count+"\"></"+"script>");break;case "friends":document.write("<script type=\"text/javascript\" charset=\"utf-8\" src=\""+this.server+"/statuses/friends_timeline/"+this.name+".json?cb="+_1c+".statuses&amp;count="+this.count+"\"></"+"script>");break;case "public":document.write("<script type=\"text/javascript\" charset=\"utf-8\" src=\""+this.server+"/statuses/public_timeline.json?cb="+_1c+".statuses&amp;count="+this.count+"\"></"+"script>");break;default:break;}}};ffstatuses=new fanfou.Timeline();ffstatuses.createStatuses("ffstatuses");