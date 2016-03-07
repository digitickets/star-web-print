************************************************************
      Star WebPRNT SDK  -  Ver 1.2.1
         readme_en.txt             Star Micronics Co., Ltd.
************************************************************

 1. Overview
 2. Ver 1.2.1 Changes
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


=======================
 2. Ver 1.2.1 Changes
=======================

  [SDK]
   - Modified default setting of BM.
     With WebPRNT Browser, enabled to use BM, setting by MSW.

  [User's Manual]
   - Revise reference of API related with BM.
   - Added reference related with StarPRNT mode.

=============
 3. Contents
=============

  StarWebPRNT_WebContents_V1.2.1
  |
  | Readme_En.txt                       // Release Note(English)
  | Readme_Jp.txt                       // Release Note(Japanese)
  | SoftwareLicenseAgreement.pdf        // Software License Agreement(English)
  | SoftwareLicenseAgreement_jp.pdf     // Software License Agreement(Japanese)
  |
  +- UsersManual
  |  |  jp                              // Master help file(English)
  |  +- en                              // Master help file(Japanese)
  |
  +- Sample                             // WebPRNT sample program


=================
 4. Scope
=================

  [Printer Model]
       SM-S210I         (Ver1.0 or later)    (*1)
       SM-S220I         (Ver2.0 or later)    (*1)
       SM-S230I         (Ver1.0 or later)    (*1)
       SM-T300I         (Ver2.4 or later)    (*1)
       SM-T400I         (Ver2.4 or later)    (*1)
       SM-L200          (Ver1.0 or later)    (*1)

       FVP10            (Ethernet: Ver1.5 or later, Bluetooth: Ver2.0 or later)  (*1)
       TSP650II         (Ethernet: Ver1.2 or later, Bluetooth: Ver1.0 or later)  (*1)
       TSP700II         (Ethernet: Ver4.1 or later, Bluetooth: Ver4.0 or later)  (*1)
       TSP800II         (Ethernet: Ver1.6 or later, Bluetooth: Ver2.0 or later)  (*1)
       mPOP             (Ver1.0 or later)    (*1)

       SP700            (Ethernet: Ver3.0 or later, Bluetooth: Ver4.0 or later)  (*2)

       ASR10            (Linux OS Ver1.6 or later)

       <Notification of Bluetooth I/F>
         To print data, "Star WebPRNT Browser" is required.
           *1: Support both iOS and Android devices.
           *2: Support iOS devices only.

  [Interface Card]
       LAN:       IFBD-HE07X/HE08X/BE07X    (Ver3.1.0 or later)
       Bluetooth: IFBD-HB03/HB04            (Ver1.0.0 or later)
                  IFBD-HB05/HB06/BB05       (Ver1.0.0 or later)

=============
  5. Remarks
=============

  ---

==============
 6. Copyright
==============

  Copyright 2014-2016 Star Micronics Co., Ltd. All rights reserved.


====================
 7. Release History
====================

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
