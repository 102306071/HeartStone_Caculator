/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-04-25 22:16:37
 * @version $Id$
 */

 $(function(){

 	var total_damage = 0;
 	var blue_count = 0;
 	var purple_count = 0;
 	var orange_count = 0;


 	$('#blue').on('click',function(){
 		blue_count+=1;
 		$('#n_blue').text(blue_count);
 		caculateDamage();
 	})

 	$('#purple').on('click',function(){
 		purple_count+=1;
 		$('#n_purple').text(purple_count);
 		caculateDamage();
 	})

 	$('#orange').on('click',function(){
 		orange_count+=1;
 		$('#n_orange').text(orange_count);
 		caculateDamage();
 	})

 	$('#reset').on('click',function(){
 		total_damage = 0;
	 	blue_count = 0;
	 	purple_count = 0;
	 	orange_count = 0;
	 	total_damage = 0;

	 	render();

 	})

 	function render(){
 		$('#n_blue').text(blue_count);
	 	$('#n_purple').text(purple_count);
	 	$('#n_orange').text(orange_count);
	 	$('#total_damage').text(total_damage);
 	}

 	function caculateDamage(){
 		total_fish = blue_count + purple_count + orange_count;
 		if (total_fish <= 7) {
 			total_damage = blue_count*(2+ (purple_count*2)) + orange_count*(2+ blue_count+ purple_count + orange_count-1 +(purple_count*2))
 		$('#total_damage').text(total_damage);
 	} else{
 		$('#total_damage').text("30~44");
 	};
 		
 	}


 });

