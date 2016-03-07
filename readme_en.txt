************************************************************
      Star WebPRNT SDK  -  Ver 1.1.0
         readme_en.txt             Star Micronics Co., Ltd.
************************************************************

 1. Overview
 2. Ver 1.1.0 Changes
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
  You can print receipts by embeding JavaScript in this SDK package into your
  HTML file. And you can control your printer. It allows you to print receipts
  Using your web programming knowledge, you can control printer.
  No printer drivers or plug-ins are required.


=======================
 2. Ver 1.1.0 Changes
=======================

   - Changed the layout of sample contents.
   - Support Android device.

  [SDK]
   - Add the function to adjust screen size automatically.
   - Fix display bug on Android WebPRNT Browser.

=============
 3. Contents
=============

  WebPRNT SDK
  |
  | Readme_En.txt                       // Release Note(English)
  | Readme_Jp.txt                       // Release Note(Japanese)
  | SoftwareLicenseAgreement.pdf        // Software License Agreement(English)
  | SoftwareLicenseAgreement_jp.pdf     // Software License Agreement(Japanese)
  |
  +- UsersManual
  |  |  jp                              // Master help file(English)
  |  +- en                              // Master help file(Japnese)
  |
  +- Sample                             // WebPRNT sample program


=================
 4. Scope
=================

  [Printer Model]
       SM-S210I         (Ver1.0 or later)    (*1)
       SM-S220I         (Ver2.0 or later)    (*1)
       SM-T300I         (Ver2.4 or later)    (*1)
       SM-T400I         (Ver2.4 or later)    (*1)

       FVP10            (Ethernet: Ver1.5 or later)
       TSP650II         (Ethernet: Ver1.2 or later, Bluetooth: Ver1.0 or later)
       TSP700II         (Ethernet: Ver4.1 or later, Bluetooth: Ver4.0 or later)
       TSP800II         (Ethernet: Ver1.6 or later, Bluetooth: Ver2.0 or later)

       SP700            (Ethernet: Ver3.0 or later, Bluetooth: Ver4.0 or later)

       ASR10            (Linux OS Ver1.6 or later)

  [Interface]
       LAN:       IFBD-HE07X/HE08X/BE07X    (Ver3.1.0 or later)
       Bluetooth: IFBD-HB03/HB05            (Ver1.0.0 or later)  (*1)
                  IFBD-HB04/HB06            (Ver1.0.0 or later)  (*2)

       (*1)Supported in iOS and Android. Star WebPRNT Browser is necessary for print.
       (*2)Supported only in iOS. Star WebPRNT Browser for iOS is necessary for print.


=============
  5. Remarks
=============

  ---

==============
 6. Copyright
==============

  Copyright 2014-2015 Star Micronics Co., Ltd. All rights reserved.


====================
 7. Release History
====================

 Ver 1.1.0   
 02/20/2015   : [SDK]
                - Add the function that the display optimization of the web contents.
                - Fix some issues when it shows on Android WebPRNT Browser.

 Ver 1.0.0
 12/12/2014   : [SDK]
                - Added top-page
                - Added how to use "Star WebPRNT Browser for iOS"
                - Support 2inch receipt printing
                - Added the function that contents should be hidden by default
                  and be displayed by window.onLoad function after all contents
                  finish loading
                - At the same time that SendMessage() function is called, the
                  HTML layer displaying [Now Printing...] is superposed on the
                  top layer to make the whole page unclickable and prevent
                  double-pressing of a print button.

                [User's Manual]
                - Added how to use "Star WebPRNT Browser for iOS"

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
