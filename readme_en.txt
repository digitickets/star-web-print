************************************************************
      Star webPRNT SDK  -  Ver 1.7.0
         Readme_En.txt             Star Micronics Co., Ltd.
************************************************************

 1. Overview
 2. Ver 1.7.0 Changes
 3. Contents
 4. Scope
 5. Remarks
 6. Copyright
 7. Release History


=============
 1. Overview
=============

  Using this software, provide you a multi platform solution to print directly
  from various devices such as PCs and tablets via a web browser.
  You can print receipts by embedding JavaScript in this SDK package into your
  HTML file. And you can control your printer. It allows you to print receipts
  Using your web programming knowledge, you can control printer.
  No printer drivers or plug-ins are required.

  See the Users Manual for detailed information.
  Users Manual: https://www.star-m.jp/starwebprnt-oml.html

=======================
 2. Ver 1.7.0 Changes
=======================
  
  [SDK]
   - Added hold print function for TSP650IISK.

=============
 3. Contents
=============

  StarWebPRNT_WebContents_V1.7.0
  |
  |- Readme_En.txt                       // Release Note(English)
  |- Readme_Jp.txt                       // Release Note(Japanese)
  |- SoftwareLicenseAgreement.pdf        // Software License Agreement(English)
  |- SoftwareLicenseAgreement_Jp.pdf     // Software License Agreement(Japanese)
  |- Sample                              // Star webPRNT sample program
  |- UsersManual                         // Shortcut to User Manual

=================
 4. Scope
=================

  [Printer Model]
       SM-S210I         (Ver2.4 or later)    (*1)
       SM-S220I         (Ver2.0 or later)    (*1)
       SM-S230I         (Ver1.0 or later)    (*1)
       SM-T300I         (Ver2.4 or later)    (*1)
       SM-T400I         (Ver2.4 or later)    (*1)
       SM-L200          (Ver1.0 or later)    (*1)
       SM-L300          (Ver1.0 or later)    (*1)

       FVP10            (Ethernet: Ver1.5 or later, Bluetooth: Ver2.0 or later)  (*1)
       TSP650II         (Ethernet: Ver1.2 or later, Bluetooth: Ver1.0 or later)  (*1)
       TSP650IISK       (Ver1.0 or later)    (*1)
       TSP700II         (Ethernet: Ver4.1 or later, Bluetooth: Ver5.0 or later)  (*1)
       TSP800II         (Ethernet: Ver1.6 or later, Bluetooth: Ver2.0 or later)  (*1)
       mPOP             (Ver1.0 or later)    (*1)
       mC-Print2        (Ver1.0 or later)    (*1)
       mC-Print3        (Ver1.0 or later)    (*1)

       SP700            (Ethernet: Ver3.0 or later)

       <Notification of Bluetooth I/F>
         To print data, "Star webPRNT Browser" is required.
           *1: Support both iOS and Android devices.

  [Interface Card]
       Ethernet:  IFBD-HE07X/HE08X/BE07X    (TSP650IISK: Ver5.1.0 or later, Others: Ver3.1.0 or later)
                  IFBD-HI01X                (TSP650IISK: Ver1.9.0 or later, Others: Ver1.1.0 or later)
                  IFBD-HI02X                (Ver1.2.0 or later)
       Bluetooth: IFBD-HB03/HB04            (Ver1.0 or later)
                  IFBD-HB05/HB06/BB05       (Ver4.1 or later)

=============
  5. Remarks
=============

  1. Limitations when Star Micronics Cloud receipt uploading function is enabled on the Star webPRNT Browser
     The receipt content until each <cutpaper> element will be uploaded as
     one receipt.
     If you include more than one <cutpaper> element in one Star webPRNT
     request element, on and from the second <cutpaper> element,
     the previously set attributes for <alignment> element will be reset
     and left-aligned in the printing and the previously set attributes for
     <alignment> and <text> elements will be reset to default values in the
     uploaded receipts.
     If you need to continually reflect the attributes set prior to the
     <cutpaper> element, please send again <alignment> and <text> elements
     which have your desired attributes, in addition to the <cutpaper> element.


==============
 6. Copyright
==============

  Copyright 2013 Star Micronics Co., Ltd. All rights reserved.


====================
 7. Release History
====================

 Ver 1.7.0
 06/17/2020   : [SDK]
                 - Added hold print function for TSP650IISK.

 Ver 1.6.0
 10/18/2019   : [SDK]
                 - "StarWebPRNTTrader.js" and "StarWebPRNTExtManager.js" have been updated to accommodate iOS WKWebview.

 Ver 1.5.1
 04/10/2019   : [SDK]
                 - Added display control function in Star webPRNT browser.

 Ver 1.5.0
 11/09/2018   : [SDK]
                 - Added display control function.

                [User's Manual]
                 - Added reference related with display control function.

 Ver 1.4.1
 07/04/2018   : [User's Manual]
                 - Added support
                    * mC-Print2
                    * mC-Print3

                 - End of support
                    * ASR10

 Ver 1.4.0
 06/05/2017   : [SDK]
                 - Change Black Mark function.

                [User's Manual]
                 - Change API reference for black mark function.
                 - Added SM-L300.

 Ver 1.3.3   
 03/14/2017   : [SDK]
                 - Added setup manual for Star Micronics Cloud.

                [User's Manual]
                 - Added a list of Star webPRNT request elements supporting receipt upload function.

                [Readme]
                 - Added IFBD-HI01X/HI02X to the supported interface card.
                 - Corrected misprints of the supported F/W version.

 Ver 1.3.2   
 12/26/2016   : [SDK]
                 - "WebPRNTTrader.js" have been updated to accommodate changing security requirements.

 Ver 1.3.1   
 09/30/2016   : [SDK]
                 - Added annotation when selecting codepage attribute in text elements.

                [User's Manual]
                 - Added annotation when selecting codepage attribute in text elements.

 Ver 1.3.0   
 09/01/2016   : [SDK]
                 - Added status monitoring function.
                 - Added character code support in text element.

                [User's Manual]
                 - Added reference related with BCR status monitoring.
                 - Added reference related with character code.

 Ver 1.2.1   
 02/08/2016   : [SDK]
                 - Modified default setting of BM.
                   With WebPRNT Browser, enabled to use BM, setting by MSW.

                [User's Manual]
                 - Revise reference of API related with BM.
                 - Added reference related with StarPRNT mode.

 Ver 1.2.0   
 11/06/2015   : [SDK]
                - Support black mark function.

                [User's Manual]
                - Added API reference for black mark function.

 Ver 1.1.0   
 02/20/2015   : [SDK]
                - Add the function that the display optimization of the web contents.
                - Fix some issues when it shows on Android WebPRNT Browser.

 Ver 1.0.0
 12/12/2014   : [SDK]
                - Added top-page
                - Added how to use "Star webPRNT Browser for iOS"
                - Support 2inch receipt printing
                - Added the function that contents should be hidden by default
                  and be displayed by window.onLoad function after all contents
                  finish loading
                - At the same time that SendMessage() function is called, the
                  HTML layer displaying [Now Printing...] is superposed on the
                  top layer to make the whole page unclickable and prevent
                  double-pressing of a print button.

                [User's Manual]
                - Added how to use "Star webPRNT Browser for iOS"

 Ver 0.3.0
 01/15/2014   : [SDK]
                - Supported to UTF-8.

                [User's Manual]
                - Added the Dot Printer discription.
                - Added the UTF-8 discription
                - Added the ASR10 in the "Star POS Printer" of the "Example of system configuration".

 Ver 0.2.0
 11/07/2013   : [SDK]
                - Modified the default discription of the StarWebPRNT endpoint URL in HTML files.

                [User's Manual]
                - Added the ASR10 discription in user's manual.
 Ver 0.1.0
 08/26/2013   : Ver. 0.1.0 First Release
