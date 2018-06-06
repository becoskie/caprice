//array push/pop - IE5Mac
function p2h_push( v )
{
  this[this.length]=v;
}

function p2h_pop()
{
   if(this.length > 0)
   {
  var v = this[this.length -1];
  this.length--;
  return( v );
   }
}

function P2H_ImgSwap(divName, imgPath)
{
  var lyr =document.getElementById(divName);
  if(lyr)
  {
    lyr.style.background = 'url('+imgPath+')';
  }
}

function P2H_GetElementsByClass(className)
{
    var c=0;
    var i=0;
    var tagCollect = new Array();
    var tags = document.getElementsByTagName("*");
if(tags.length == 0){ /*  Safari 1.0 kludge. */ tags=document.getElementsByTagName("div"); }

    for (i=0; i < tags.length; i++)
    {
        if (tags[i].className==className)
        {
        tagCollect[c]=tags[i];
            c++;
        }
    }
    return(tagCollect);
}

function P2H_SetVisibilityByC(className, show)
{
   var arg = 'hidden';
   var i=0;
   if(show){ arg = 'visible';}
   var lyrArray = P2H_GetElementsByClass(className);
   for(i=0; i < lyrArray.length; i++)
   {
     lyrArray[i].style.visibility = arg;
   }
}

function P2H_Menu(menuClassName, delay, level)
{
  P2H_StopClock();
  window.p2h_delay=delay;
  P2H_SetMenu(menuClassName, level);
  P2H_SetVisibilityByC(menuClassName, true);
  P2H_SetVisibilityByC(menuClassName+"hide", false);
  if(level==0){P2H_SetVisibilityByC("hidey", false);}
}

function P2H_MenuItem(level)
{
  P2H_StopClock();
  P2H_ClearMenu(level);
}

function P2H_ClearMenu(level)
{
  if(window.p2h_popmenuarray)
  {
    while(window.p2h_popmenuarray.length > level)
    {
  var cname = p2h_popmenuarray.pop()
      P2H_SetVisibilityByC(cname, false);
  P2H_SetVisibilityByC(cname+"hide", true);
    }
  }
  if(level==0){ P2H_SetVisibilityByC("hidey", true); }
}

function P2H_SetMenu(menuClassName, level)
{
  if(! window.p2h_popmenuarray)
  { 
  window.p2h_popmenuarray = new Array(); 
if(!window.p2h_popmenuarray.push){window.p2h_popmenuarray.push=p2h_push;}
if(!window.p2h_popmenuarray.pop){window.p2h_popmenuarray.pop=p2h_pop;}
  }
  P2H_ClearMenu(level);
  window.p2h_popmenuarray.push(menuClassName);
}

function P2H_StopClock()
{
  if(window.p2h_timeoutid)
  {
    clearTimeout(window.p2h_timeoutid);
    window.p2h_timeoutid = null;
  }
}

function P2H_StartClock()
{
  if(p2h_delay == 0){ P2H_CloseMenu(); return;}
  P2H_StopClock();
  window.p2h_timeoutid = setTimeout('P2H_CloseMenu()', window.p2h_delay);
}

function P2H_CloseMenu()
{
  P2H_StopClock();
  P2H_ClearMenu(0);
}




function PW_GetElementsByTagClass(tagName, className)
{
    var c=0;
    var i=0;
    var tagCollect = new Array();
    var tags = document.getElementsByTagName(tagName);
    for (i=0; i < tags.length; i++)
    {
        if (tags[i].className==className)
        {
    tagCollect[c]=tags[i];
            c++;
        }
    }
    return(tagCollect);
}


function PW_SetDisplay(cName, show)
{
     var arg = 'none';
     var i=0;
     if(show){ arg = 'block';}
     var lyrArray = PW_GetElementsByTagClass('li', cName);
     if(lyrArray != null)
     {  
       for(i=0; i < lyrArray.length; i++)
       {
           lyrArray[i].style.display=arg;
       }
     }
}
