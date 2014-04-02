// JavaScript Document
var flagAnim = 0;
var isInside = 0;
var curentMenuElem = null;
var titleBoxAnim = null;

var glTitle = null;
var glWidth = null;

function changeTitleBox(title, newWidth)
{
	if($("#title-box").css("display") == "none")
	{
		$("#title-box").css({"height" : "0px", "padding-bottom": "0px", "padding-top": "0px"});
		
		glTitle = title;
		glWidth = newWidth;
		changeTitle();
		
		$("#title-box").show(10);
		
		titleBoxAnim = setTimeout(displayAnimTitleBox, 400);
	}
	else
	{
		glTitle = title;
		glWidth = newWidth;
		hideAnimTitleBox();
		
		
		titleBoxAnim = setTimeout(displayAnimTitleBox, 1000);
	}
	
}

function destroyTitleBox()
{
	if($("#title-box").css("display") == "none")
	{
	   	$("#title-box").animate({"height" : "0px", "padding-top" : "0px", "padding-bottom" : "0px"}, 500).css("visibility", "hidden");
		
	}
		
}

function displayAnimTitleBox()
{
		$("#title-box").animate({"height" : "20px", "padding-top" : "8px", "padding-bottom" : "2px"}, 500);
}

function hideAnimTitleBox()
{
	$("#title-box").animate({"height" : "0px", "padding-top" : "0px", "padding-bottom" : "0px"}, 500);
	
	setTimeout(changeTitle, 700);
}

function changeTitle()
{
	$("#title-box div.title").text(glTitle);
	$("#title-box").css("width", glWidth + "px");
}


function stopMenuAnim(time)
{
	if(flagAnim == 0)
	{
		flagAnim = 1;
		
		setTimeout("stopMenuAnim(0);", time);
		$("#menu > ul > li").unbind("hover");
	}
	else
	{
		flagAnim = 0;
		$("#menu > ul > li").hover(hoverA, hoverB);	
	}
}

function hoverA()
{
	if(flagAnim == 0)
	{
		
		$("ul",this).stop().slideDown(500);
	}
	
	curentMenuElem = $(this);
}

function check()
{
	if(flagAnim == 0)
	{
		if(isInside == 0)
		{
			isInside = 1;
			$("ul",this).fadeIn(300);
		}
	}
}

function reset()
{
	flagAnim = 0;
	if(curentMenuElem != null)
	{
		$("ul", curentMenuElem).slideDown(300);
	}
}

function hoverB()
{
	if(flagAnim == 0)
	{
		$("ul",this).stop().slideUp(300);
		flagAnim = 1;
		curentMenuElem = null;
		setTimeout("reset();", 600);
		
	}
}

function menuFunctionality()
{
	$("#menu > ul > li").hover(hoverA, hoverB);
}

/*=======================================================================================================
							***** Loading functions (ENG) *****
=========================================================================================================*/
function loadVerticalMT_deu()
{
	$("#mainContent").load("mt_vertical_turning_boring_mills_deu.html #mainContent", initSubMainContent);
	changeTitleBox("KARUSSELDREHBÄNKE", 200);
	
	changeBackground(backImage_MTools);
	
	return false;
}

function loadVerticalMT_eng()
{
	$("#mainContent").load("mt_vertical_turning_boring_mills_eng.html #mainContent", initSubMainContent);
	changeTitleBox("VERTICAL TURNING AND BORING MILLS", 310);
		
	changeBackground(backImage_MTools);
	
	return false;
}

function loadVerticalMT_rom()
{
	$("#mainContent").load("mt_vertical_turning_boring_mills_rom.html #mainContent", initSubMainContent);
	changeTitleBox("STRUNGURI CARUSEL", 200);
	
	changeBackground(backImage_MTools);
	
	return false;
}

function loadVerticalMT_fra()
{
	$("#mainContent").load("mt_vertical_turning_boring_mills_fra.html #mainContent", initSubMainContent);
	changeTitleBox("TOURS VERTICAUX", 180);
	
	changeBackground(backImage_MTools);
	
	return false;
}

function loadVerticalMT_ita()
{
	$("#mainContent").load("mt_vertical_turning_boring_mills_ita.html #mainContent", initSubMainContent);
	changeTitleBox("STRUNGURI CARUSEL", 300);
	
	changeBackground(backImage_MTools);
	
	return false;
}

function loadVerticalMT_spa()
{
	$("#mainContent").load("mt_vertical_turning_boring_mills_spa.html #mainContent", initSubMainContent);
	changeTitleBox("TORNOS CARRUSEL", 170);
	
	changeBackground(backImage_MTools);
	
	return false;
}

function loadHorizMT_deu()
{
	$("#mainContent").load("mt_horizontal_boring_milling_machines_deu.html #mainContent", initSubMainContent);
	changeTitleBox("HORIZONTALE AUSBOHR UND FRÄSMASCHINEN", 360);
	
	changeBackground(backImage_MTools);
	
	return false;
}

function loadHorizMT_eng()
{
	$("#mainContent").load("mt_horizontal_boring_milling_machines_eng.html #mainContent", initSubMainContent);
	changeTitleBox("HORIZONTAL BORING AND MILLING MACHINES", 340);
	
	changeBackground(backImage_MTools);
	
	return false;
}

function loadHorizMT_rom()
{
	$("#mainContent").load("mt_horizontal_boring_milling_machines_rom.html #mainContent", initSubMainContent);
	changeTitleBox(" MASINI DE ALEZAT SI FREZAT ORIZONTALE", 320);
	
	changeBackground(backImage_MTools);
	
	return false;
}

function loadHorizMT_fra()
{
	$("#mainContent").load("mt_horizontal_boring_milling_machines_fra.html #mainContent", initSubMainContent);
	changeTitleBox(" ALÉSEUSES ET FRAISEUSES HORIZONTALES ", 320);
	
	changeBackground(backImage_MTools);
	
	return false;
}

function loadHorizMT_ita()
{
	$("#mainContent").load("mt_horizontal_boring_milling_machines_ita.html #mainContent", initSubMainContent);
	changeTitleBox(" MASINI DE ALEZAT SI FREZAT ORIZONTALE ", 320);
	
	changeBackground(backImage_MTools);
	
	return false;
}

function loadHorizMT_spa()
{
	$("#mainContent").load("mt_horizontal_boring_milling_machines_spa.html #mainContent", initSubMainContent);
	changeTitleBox("  ESCARIADORES Y FRESADORAS HORIZONTALES ", 340);
	
	changeBackground(backImage_MTools);
	
	return false;
}

function loadGantryMT_deu()
{
	$("#mainContent").load("mt_gantry_milling_machines_deu.html #mainContent", initSubMainContent);
	changeTitleBox("FRÄSMASCHINEN TYP GANTRY", 240);
	
	changeBackground(backImage_MTools);
	
	return false;
}

function loadGantryMT_eng()
{
	$("#mainContent").load("mt_gantry_milling_machines_eng.html #mainContent", initSubMainContent);
	changeTitleBox("GANTRY MILLING MACHINES", 220);
	
	changeBackground(backImage_MTools);
	
	return false;
}

function loadGantryMT_rom()
{
	$("#mainContent").load("mt_gantry_milling_machines_rom.html #mainContent", initSubMainContent);
	changeTitleBox("MASINI DE FREZAT GANTRY", 220);
	
	changeBackground(backImage_MTools);
	
	return false;
}

function loadGantryMT_fra()
{
	$("#mainContent").load("mt_gantry_milling_machines_fra.html #mainContent", initSubMainContent);
	changeTitleBox("FRAISEUSES GANTRY", 200);
	
	changeBackground(backImage_MTools);
	
	return false;
}

function loadGantryMT_ita()
{
	$("#mainContent").load("mt_gantry_milling_machines_ita.html #mainContent", initSubMainContent);
	changeTitleBox("MASINI DE FREZAT GANTRY", 320);
	
	changeBackground(backImage_MTools);
	
	return false;
}

function loadGantryMT_spa()
{
	$("#mainContent").load("mt_gantry_milling_machines_spa.html #mainContent", initSubMainContent);
	changeTitleBox("MÁQUINAS FRESADORAS DE TIPO GANTRY", 310);
	
	changeBackground(backImage_MTools);
	
	return false;
}


function loadRebuildingMT_eng()   
{
	$("#mainContent").load("mt_rebuilding_eng.html #mainContent", initSubMainContent);
	changeTitleBox("REBUILDING AND RETROFITTING", 250);
	
	changeBackground(backImage_MTools);
	
	return false;
}

function loadRebuildingMT_rom()
{
	$("#mainContent").load("mt_rebuilding_rom.html #mainContent", initSubMainContent);
	changeTitleBox("RECONDITIONARE SI MODERNIZARE", 280);
	
	changeBackground(backImage_MTools);
	
	return false;
}

function loadRebuildingMT_fra()
{
	$("#mainContent").load("mt_rebuilding_fra.html #mainContent", initSubMainContent);
	changeTitleBox("RECONSTRUCTION ET MODERNIZATION", 320);
	
	changeBackground(backImage_MTools);
	
	return false;
}

function loadRebuildingMT_ita()
{
	$("#mainContent").load("mt_rebuilding_ita.html #mainContent", initSubMainContent);
	changeTitleBox("RECONDITIONARE SI MODERNIZARE", 320);
	
	changeBackground(backImage_MTools);
	
	return false;
}

function loadRebuildingMT_spa()
{
	$("#mainContent").load("mt_rebuilding_spa.html #mainContent", initSubMainContent);
	changeTitleBox("REACONDICIONAMIENTOS Y MODERNIZACIONES", 350);
	
	changeBackground(backImage_MTools);
	
	return false;
}

function loadRebuildingMT_deu() 
{
	$("#mainContent").load("mt_rebuilding_deu.html #mainContent", initSubMainContent);
	changeTitleBox("WIEDERHERSTELLUNG UND MODERNISIERUNG", 340);
	
	changeBackground(backImage_MTools);
	
	return false;
}

/* ------------------------------------------ */

function loadAutolockPress_deu()
{
	$("#mainContent").load("press_autolock_deu.html #mainContent", initSubMainContent);
	changeTitleBox("AUTOLOCK PRESS", 180);
	
	changeBackground(backImage_MTools);
	
	return false;
}


function loadAutolockPress_eng()
{
	$("#mainContent").load("press_autolock_eng.html #mainContent", initSubMainContent);
	changeTitleBox("AUTOLOCK PRESS", 180);
	
	changeBackground(backImage_MTools);
	
	return false;
}

function loadAutolockPress_rom()
{
	$("#mainContent").load("press_autolock_rom.html #mainContent", initSubMainContent);
	changeTitleBox("PRESA AUTOLOCK", 180);
	
	changeBackground(backImage_MTools);
	
	return false;
}

function loadAutolockPress_fra()
{
	$("#mainContent").load("press_autolock_fra.html #mainContent", initSubMainContent);
	changeTitleBox("AUTOLOCK PRESSE", 180);
	
	changeBackground(backImage_MTools);
	
	return false;
}

function loadAutolockPress_ita()
{
	$("#mainContent").load("press_autolock_ita.html #mainContent", initSubMainContent);
	changeTitleBox("AUTOLOCK", 180);
	
	changeBackground(backImage_MTools);
	
	return false;
}

function loadAutolockPress_spa()
{
	$("#mainContent").load("press_autolock_spa.html #mainContent", initSubMainContent);
	changeTitleBox("AUTOLOCK", 180);
	
	changeBackground(backImage_MTools);
	
	return false;
}

function loadLTBagomaticPress_deu()
{
	$("#mainContent").load("press_ltbagomatic_deu.html #mainContent", initSubMainContent);
	changeTitleBox("LT BAG-O-MATIC PRESS", 180);
	
	changeBackground(backImage_MTools);
	
	return false;
}


function loadLTBagomaticPress_eng()
{
	$("#mainContent").load("press_ltbagomatic_eng.html #mainContent", initSubMainContent);
	changeTitleBox("LT BAG-O-MATIC PRESS", 180);
	
	changeBackground(backImage_MTools);
	
	return false;
}

function loadLTBagomaticPress_rom()
{
	$("#mainContent").load("press_ltbagomatic_rom.html #mainContent", initSubMainContent);
	changeTitleBox("PRESA LT BAG-O-MATIC", 180);
	
	changeBackground(backImage_MTools);
	
	return false;
}

function loadLTBagomaticPress_fra()
{
	$("#mainContent").load("press_ltbagomatic_fra.html #mainContent", initSubMainContent);
	changeTitleBox("LT BAG-O-MATIC PRESSE", 180);
	
	changeBackground(backImage_MTools);
	
	return false;
}

function loadLTBagomaticPress_spa()
{
	$("#mainContent").load("press_ltbagomatic_spa.html #mainContent", initSubMainContent);
	changeTitleBox("LT BAG-O-MATIC", 180);
	
	changeBackground(backImage_MTools);
	
	return false;
}

function loadLTBagomaticPress_ita()
{
	$("#mainContent").load("press_ltbagomatic_ita.html #mainContent", initSubMainContent);
	changeTitleBox("LT BAG-O-MATIC", 180);
	
	changeBackground(backImage_MTools);
	
	return false;
}

function loadBagoformPress_deu()
{
	$("#mainContent").load("press_bagoform_deu.html #mainContent", initSubMainContent);
	changeTitleBox("BAG-O-FORM PRESS", 180);
	
	changeBackground(backImage_MTools);
	
	return false;
}

function loadBagoformPress_eng()
{
	$("#mainContent").load("press_bagoform_eng.html #mainContent", initSubMainContent);
	changeTitleBox("BAG-O-FORM PRESS", 180);
	
	changeBackground(backImage_MTools);
	
	return false;
}

function loadBagoformPress_rom()
{
	$("#mainContent").load("press_bagoform_rom.html #mainContent", initSubMainContent);
	changeTitleBox("PRESA BAG-O-FORM", 180);
	
	changeBackground(backImage_MTools);
	
	return false;
}

function loadBagoformPress_fra()
{
	$("#mainContent").load("press_bagoform_fra.html #mainContent", initSubMainContent);
	changeTitleBox("BAG-O-FORM PRESSE", 180);
	
	changeBackground(backImage_MTools);
	
	return false;
}

function loadBagoformPress_ita()
{
	$("#mainContent").load("press_bagoform_ita.html #mainContent", initSubMainContent);
	changeTitleBox("BAG-O-FORM", 180);
	
	changeBackground(backImage_MTools);
	
	return false;
}

function loadBagoformPress_spa()
{
	$("#mainContent").load("press_bagoform_spa.html #mainContent", initSubMainContent);
	changeTitleBox("BAG-O-FORM", 180);
	
	changeBackground(backImage_MTools);
	
	return false;
}

function loadOTRBomPress_deu()
{
	$("#mainContent").load("press_otrbom_deu.html #mainContent", initSubMainContent);
	changeTitleBox("OTR-BOM PRESS", 180);
	
	changeBackground(backImage_MTools);
	
	return false;
}

function loadOTRBomPress_eng()
{
	$("#mainContent").load("press_otrbom_eng.html #mainContent", initSubMainContent);
	changeTitleBox("OTR-BOM PRESS", 180);
	
	changeBackground(backImage_MTools);
	
	return false;
}

function loadOTRBomPress_rom()
{
	$("#mainContent").load("press_otrbom_eng.html #mainContent", initSubMainContent);
	changeTitleBox("PRESA OTR-BOM", 180);
	
	changeBackground(backImage_MTools);
	
	return false;
}

function loadOTRBomPress_fra()
{
	$("#mainContent").load("press_otrbom_fra.html #mainContent", initSubMainContent);
	changeTitleBox("OTR-BOM PRESSE", 180);
	
	changeBackground(backImage_MTools);
	
	return false;
}

function loadOTRBomPress_ita()
{
	$("#mainContent").load("press_otrbom_ita.html #mainContent", initSubMainContent);
	changeTitleBox("OTR-BOM", 180);
	
	changeBackground(backImage_MTools);
	
	return false;
}

function loadOTRBomPress_spa()
{
	$("#mainContent").load("press_otrbom_spa.html #mainContent", initSubMainContent);
	changeTitleBox("OTR-BOM", 180);
	
	changeBackground(backImage_MTools);
	
	return false;
}

function loadRebuildingPress_eng()
{
	$("#mainContent").load("press_rebuild_eng.html #mainContent", initSubMainContent);
	changeTitleBox("REBUILDING", 180);
	
	changeBackground(backImage_MTools);
	
	return false;
}

function loadRebuildingPress_rom()
{
	$("#mainContent").load("press_rebuild_rom.html #mainContent", initSubMainContent);
	changeTitleBox("RECONDITIONARE", 180);
	
	changeBackground(backImage_MTools);
	
	return false;
}

function loadRebuildingPress_ita()
{
	$("#mainContent").load("press_rebuild_ita.html #mainContent", initSubMainContent);
	changeTitleBox("RECONDITIONARE", 180);
	
	changeBackground(backImage_MTools);
	
	return false;
}

function loadRebuildingPress_spa()
{
	$("#mainContent").load("press_rebuild_spa.html #mainContent", initSubMainContent);
	changeTitleBox("RECONDITIONARE", 180);
	
	changeBackground(backImage_MTools);
	
	return false;
}

function loadRebuildingPress_fra()
{
	$("#mainContent").load("press_rebuild_fra.html #mainContent", initSubMainContent);
	changeTitleBox("RECONDITIONARE", 180);
	
	changeBackground(backImage_MTools);
	
	return false;
}

function loadRebuildingPress_deu()
{
	$("#mainContent").load("press_rebuild_deu.html #mainContent", initSubMainContent);
	changeTitleBox("RECONDITIONARE", 180);
	
	changeBackground(backImage_MTools);
	
	return false;
}

function loadAboutFactory_deu()
{
	$("#mainContent").load("about_factory_TMG_deu.html #mainContent", initSubMainContent);
	changeTitleBox("DIE TMG FABRIK", 180);
	//destroyTitleBox();
	
	changeBackground(backImage_TMG_Factory);
	
	return false;
}

function loadAboutFactory_eng()
{
	$("#mainContent").load("about_factory_TMG_eng.html #mainContent", initSubMainContent);
	changeTitleBox("TMG FACTORY", 180);
	//destroyTitleBox();
	
	changeBackground(backImage_TMG_Factory);
	
	return false;
}

function loadAboutFactory_fra()
{
	$("#mainContent").load("about_factory_TMG_fra.html #mainContent", initSubMainContent);
	changeTitleBox("L'USINE TMG", 180);
	//destroyTitleBox();
	
	changeBackground(backImage_TMG_Factory);
	
	return false;
}

function loadAboutFactory_rom()
{
	$("#mainContent").load("about_factory_TMG_rom.html #mainContent", initSubMainContent);
	changeTitleBox("FABRICA TMG", 180);
	//destroyTitleBox();
	
	changeBackground(backImage_TMG_Factory);
	
	return false;
}

function loadAboutFactory_ita()
{
	$("#mainContent").load("about_factory_TMG_ita.html #mainContent", initSubMainContent);
	changeTitleBox("LA FABBRICA TMG", 180);
	//destroyTitleBox();
	
	changeBackground(backImage_TMG_Factory);
	
	return false;
}

function loadAboutFactory_spa()
{
	$("#mainContent").load("about_factory_TMG_spa.html #mainContent", initSubMainContent);
	changeTitleBox("LA FÁBRICA TMG", 160);
	//destroyTitleBox();
	
	changeBackground(backImage_TMG_Factory);
	
	return false;
}


function loadGlobalMap_eng()
{
	$("#mainContent").load("about_global_map_eng.html #mainContent", initMap);
	changeTitleBox("YARED GROUP", 180);
	
	changeBackground(backImage_Yared_Group);
	
	return false;	
}

function loadGlobalMap_rom()
{
	$("#mainContent").load("about_global_map_rom.html #mainContent", initMap);
	changeTitleBox("GRUPUL YARED", 180);
	
	changeBackground(backImage_Yared_Group);
	
	return false;	
}

function loadGlobalMap_fra()
{
	$("#mainContent").load("about_global_map_fra.html #mainContent", initMap);
	changeTitleBox("LE GROUPE YARED", 180);
	
	changeBackground(backImage_Yared_Group);
	
	return false;	
}

function loadGlobalMap_ita()
{
	$("#mainContent").load("about_global_map_ita.html #mainContent", initMap);
	changeTitleBox("IL GRUPPO YARED", 180);
	
	changeBackground(backImage_Yared_Group);
	
	return false;	
}

function loadGlobalMap_deu()
{
	$("#mainContent").load("about_global_map_deu.html #mainContent", initMap);
	changeTitleBox("DIE YARED GRUPPE", 180);
	
	changeBackground(backImage_Yared_Group);
	
	return false;	
}

function loadGlobalMap_spa()
{
	$("#mainContent").load("about_global_map_spa.html #mainContent", initMap);
	changeTitleBox("IL GRUPO YARED", 150);
	
	changeBackground(backImage_Yared_Group);
	
	return false;	
}

function loadContact_deu()
{
	$("#mainContent").load("contact_deu.html #mainContent", initContact);
	changeTitleBox("KONTAKT", 180);
	
	changeBackground(backImage_Contact);
	
	return false;		
}


function loadContact_eng()
{
	
	
	$("#mainContent").load("contact_eng.html #mainContent", initContact);
	changeTitleBox("CONTACT", 180);
	
	changeBackground(backImage_Contact);
	
	
	
	return false;		
}

function loadContact_rom()
{
	$("#mainContent").load("contact_rom.html #mainContent", initContact);
	changeTitleBox("DATE CONTACT", 180);
	
	changeBackground(backImage_Contact);
	
	return false;		
}

function loadContact_fra()
{
	$("#mainContent").load("contact_fra.html #mainContent", initContact);
	changeTitleBox("CONTACTER", 180);
	
	changeBackground(backImage_Contact);
	
	return false;		
}

function loadContact_ita()
{
	$("#mainContent").load("contact_ita.html #mainContent", initContact);
	changeTitleBox("CONTATTO", 180);
	
	changeBackground(backImage_Contact);
	
	return false;		
}

function loadContact_spa()
{
	$("#mainContent").load("contact_spa.html #mainContent", initContact);
	changeTitleBox("CONTACTO", 130);
	
	changeBackground(backImage_Contact);
	
	return false;		
}

function loadTEN_deu()
{
		$("#mainContent").load("ten_deu.html #mainContent", initContact);
	changeTitleBox("TEN", 180);
	
	changeBackground(backImage_TEN);
	
	return false;	
}

function loadTEN_eng()
{
		$("#mainContent").load("ten_eng.html #mainContent", initContact);
	changeTitleBox("TEN", 180);
	
	changeBackground(backImage_TEN);
	
	return false;	
}

function loadTEN_rom()
{
		$("#mainContent").load("ten_rom.html #mainContent", initContact);
	changeTitleBox("TEN", 180);
	
	changeBackground(backImage_TEN);
	
	return false;	
}

function loadTEN_fra()
{
		$("#mainContent").load("ten_fra.html #mainContent", initContact);
	changeTitleBox("TEN", 180);
	
	changeBackground(backImage_TEN);
	
	return false;	
}

function loadTEN_ita()
{
		$("#mainContent").load("ten_ita.html #mainContent", initContact);
	changeTitleBox("TEN", 180);
	
	changeBackground(backImage_TEN);
	
	return false;	
}

function loadTEN_spa()
{
		$("#mainContent").load("ten_spa.html #mainContent", initContact);
	changeTitleBox("TEN", 180);
	
	changeBackground(backImage_TEN);
	
	return false;	
}

function loadPhotoGallery_deu()
{
	$("#mainContent").load("photogallery_eng.html #mainContent", initPhotoGallery);
	changeTitleBox("FOTOGALERIE", 200);
	
	return false;
}

function loadPhotoGallery_eng()
{
	$("#mainContent").load("photogallery_eng.html #mainContent", initPhotoGallery);
	changeTitleBox("PHOTOGALLERY", 200);
	
	return false;
}

function loadPhotoGallery_rom()
{
	$("#mainContent").load("photogallery_rom.html #mainContent", initPhotoGallery);
	changeTitleBox("GALERIE FOTO", 200);
	
	return false;
}

function loadPhotoGallery_fra()
{
	$("#mainContent").load("photogallery_rom.html #mainContent", initPhotoGallery);
	changeTitleBox("GALERIE DE PHOTOS",170);
	
	return false;
}

function loadPhotoGallery_ita()
{
	$("#mainContent").load("photogallery_rom.html #mainContent", initPhotoGallery);
	changeTitleBox("GALLERIA FOTOGRAFICA", 200);
	
	return false;
}

function loadPhotoGallery_spa()
{
	$("#mainContent").load("photogallery_rom.html #mainContent", initPhotoGallery);
	changeTitleBox("GALERÍA DE FOTOS", 160);
	
	return false;
}

function contract_manuf_eng()
{
	$("#mainContent").load("contract_manufacturing_eng.html #mainContent", initSubMainContent);
	changeTitleBox("CONTRACT MANUFACTURING", 230);

	changeBackground(backImage_Contract_Manuf);
	
	return false;	
}

function contract_manuf_rom()
{
	$("#mainContent").load("contract_manufacturing_rom.html #mainContent", initSubMainContent);
	changeTitleBox("FABRICATIE SUB CONTRACT", 200);

	changeBackground(backImage_Contract_Manuf);

	return false;	
}

function contract_manuf_fra()
{
	$("#mainContent").load("contract_manufacturing_fra.html #mainContent", initSubMainContent);
	changeTitleBox("FABRICATION À BASE DE CONTRAT", 250);

	changeBackground(backImage_Contract_Manuf);

	return false;	
}

function contract_manuf_ita()
{
	$("#mainContent").load("contract_manufacturing_ita.html #mainContent", initSubMainContent);
	changeTitleBox("FABBRICAZIONE CON IL CONTRATTO", 260);

	changeBackground(backImage_Contract_Manuf);

	return false;	
}

function contract_manuf_spa()
{
	$("#mainContent").load("contract_manufacturing_spa.html #mainContent", initSubMainContent);
	changeTitleBox(" FABRICACIÓN CON CONTRATO ", 240);

	changeBackground(backImage_Contract_Manuf);
	
	return false;	
}

function contract_manuf_deu()
{
	$("#mainContent").load("contract_manufacturing_deu.html #mainContent", initSubMainContent);
	changeTitleBox(" HERSTELLUNG MIT VERTRAG ", 230);

	changeBackground(backImage_Contract_Manuf);

	return false;	
}