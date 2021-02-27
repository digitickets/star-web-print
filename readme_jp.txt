﻿************************************************************
      Star webPRNT SDK  -  Ver 1.7.0
         Readme_Jp.txt                  スター精密（株）
************************************************************

 1. 概要
 2. Ver 1.7.0 についての変更点
 3. 内容
 4. 適用
 5. 制約事項
 6. 著作権
 7. 変更履歴


==========
 1. 概要
==========

  本ソフトウェアは、PC、タブレット等多様なデバイスからWebブラウザーを通して印刷
  を行う、マルチプラットフォームを実現します。
  プリンターの制御は、このSDKにパッケージされているJavaScriptをHTMLファイルに埋
  め込むだけで行え、Webプログラミングを行うのと同等の知識でPOSプリンターからの
  レシート印刷が可能となります。また、プリンターを制御するためのドライバーやプ
  ラグインをインストールする必要もありません。

  詳細な説明は、Users Manualを参照ください。
  Users Manual: https://www.star-m.jp/starwebprnt-oml.html

================================
 2. Ver 1.7.0 についての変更点
================================

  [SDK]
   - 用紙保持制御機能を追加。（TSP650IISK※)
     ※日本国内では販売していません。

==========
 3. 内容
==========

  StarWebPRNT_WebContents_V1.7.0
  |
  |- Readme_En.txt                       // リリースノート(英語)
  |- Readme_Jp.txt                       // リリースノート(日本語)
  |- SoftwareLicenseAgreement.pdf        // ソフトウエア使用許諾書(英語)
  |- SoftwareLicenseAgreement_Jp.pdf     // ソフトウエア使用許諾書(日本語)
  |- Sample                              // Star webPRNT用サンプルプログラム
  |- UsersManual                         // Users Manualへのショートカット

=============
 4. 適用
=============
  ■ 対象プリンタモデル
   ◇ プリンタモデル
       SM-S210I         (F/W Ver2.4以上)    (*1)
       SM-S220I         (F/W Ver2.0以上)    (*1)
       SM-S230I         (F/W Ver1.0以上)    (*1)
       SM-T300I         (F/W Ver2.4以上)    (*1)
       SM-T400I         (F/W Ver2.4以上)    (*1)
       SM-L200          (F/W Ver1.0以上)    (*1)
       SM-L300          (F/W Ver1.0以上)    (*1)

       FVP10            (Ethernet利用時: F/W Ver1.5以上, Bluetooth利用時: F/W Ver2.0以上)  (*1)
       TSP650II         (Ethernet利用時: F/W Ver1.2以上, Bluetooth利用時: F/W Ver1.0以上)  (*1)
       TSP700II         (Ethernet利用時: F/W Ver4.1以上, Bluetooth利用時: F/W Ver5.0以上)  (*1)
       TSP800II         (Ethernet利用時: F/W Ver1.6以上, Bluetooth利用時: F/W Ver2.0以上)  (*1)
       mPOP             (F/W Ver1.0以上)    (*1)
       mC-Print2        (F/W Ver1.0以上）   (*1)
       mC-Print3        (F/W Ver1.0以上）   (*1)

       SP700            (Ethernet利用時: F/W Ver3.0以上)

    <Bluetoothをご使用の場合>
      印刷するには、Star webPRNT Browserが必要です。
      対応しているデバイスは注記の通りです。

        *1 iOSおよびAndroidデバイスにおいてサポートされています。

  ◇ 対応インターフェースカード
       Ethernet:  IFBD-HE07X/HE08X/BE07X    (Ver3.1.0以上)
                  IFBD-HI01X                (Ver1.1.0以上)
                  IFBD-HI02X                (Ver1.2.0以上)
       Bluetooth: IFBD-HB03/HB04            (Ver1.0以上)
                  IFBD-HB05/HB06/BB05       (Ver4.1以上)


=============
 5. 制約事項
=============
  
  1. Star webPRNT BrowserでのStar Micronics Cloudレシートアップロード機能有効時の制約
     レシートアップロード機能有効時、各<cutpaper>エレメントまでをひとつのレシート
     としてアップロードを行います。
     １つのStar webPRNT送信エレメント内に２つ以上の<cutpaper>エレメントを含める場合、
     ２つ目以降の各<cutpaper>エレメントの後は、印字では<alignment>エレメントで以前に
     設定した属性が左寄せにリセットされ、アップロードされるレシートでは<alignment>
     エレメントと<text>エレメントで以前に設定した属性がデフォルト値にリセットされます。
     <cutpaper>エレメント以前に設定していた属性を引き続き反映したい場合、<cutpaper>
     エレメントに続けて、所望の属性を含む<alignment>エレメントと<text>エレメントを
     再度送信ください。


===========
 6. 著作権
===========

  スター精密（株）Copyright 2013


=============
 7. 更新履歴
=============

 Ver 1.7.0
  2020/06/17 : [SDK]
                 - 用紙保持制御機能を追加。（TSP650IISK※)
                   ※日本国内では販売していません。

 Ver 1.6.0
  2019/10/18 : [SDK]
                 - 「StarWebPRNTTrader.js」と「StarWebPRNTExtManager.js」を、iOS WKWebviewに対応。

 Ver 1.5.1
  2019/04/10 : [SDK]
                 - Star webPRNTブラウザーでのDisplay機能をサポート

 Ver 1.5.0
  2018/09/11 : [SDK]
                 - Display機能をサポート

               [User's Manual]
                 - Display機能に関するリファレンスを追加

 Ver 1.4.1
  2018/07/04 : [User's Manual]
                - 以下の機種を追加対応
                   mC-Print2
                   mC-Print3

                - 以下の機種のサポート終了
                   ASR10

 Ver 1.4.0
  2017/06/05 : [SDK]
                - ブラックマーク用紙の設定を変更

               [User's Manual]
                - ブラックマーク用紙の設定に関する記載を変更
                - SM-L300を追加

 Ver 1.3.3
  2017/03/14 : [SDK]
                - Star Micronics Cloudのセットアップマニュアルを追加

               [User's Manual]
                - レシートアップロード機能をサポートするStarWebPRNT送信エレメントのリストを追加

               [Readme]
                - サポートするインターフェースカードにIFBD-HI01X/HI02Xを追加
                - サポートするF/Wバージョンの誤記訂正

 Ver 1.3.2
  2016/12/26 : [SDK]
                - 「WebPRNTTrader.js」を、新しいセキュリティ要件へ対応。

 Ver 1.3.1
  2016/09/26 : [SDK]
                - テキストエレメントの文字コード選択時の注釈を追加

               [User's Manual]
                - テキストエレメントの文字コード選択時の注釈を追加

 Ver 1.3.0
  2016/09/01 : [SDK]
                - BCR・ステータス監視機能追加
                - テキストエレメントに文字コード対応を追加

               [User's Manual]
                - BCR・ステータス監視に関するリファレンスを追加
                - 文字コードに関するリファレンスを追記

 Ver 1.2.1
  2016/02/08 : [SDK]
                - ブラックマーク用紙のデフォルト設定を修正
                  WebPRNT BrowserにてMSW設定を利用して
                  ブラックマーク用紙を使用できるように対応

               [User's Manual]
                - ブラックマークに関するAPIのリファレンスを修正
                - StarPRNTモードに関するリファレンスを追加

 Ver 1.2.0   
  2015/11/06 : [SDK]
                - ブラックマーク用紙対応

               [User's Manual]
                - ブラックマークに関するAPIのリファレンスを追加

 Ver 1.1.0   
  2015/02/20 : [SDK]
                - コンテンツの表示サイズを、閲覧デバイスの画面サイズに合わせて
                  自動変更する機能追加

                - Androidデバイスにおける表示に関する不具合を修正

 Ver 1.0.0 
  2014/12/12 : [SDK]
                - iOS版Star webPRNT Browserとの組合せ利用時に発生する事案に対す
                  るサンプルコード追加
                    事案1:印刷内容が全て表示される前に印刷ボタンを押すと、その
                          時点で表示された内容のみが印刷される
                    事案2:印刷ボタンを連続して押下した場合に、iOS版Star webPRNT
                          Browserが強制終了することがある
                - トップページの追加
                - Star webPRNT Browser iOSの使い方マニュアルを追加
                - 2inchレシート紙をサポート
                - 全ての表示が完了してからwindows.onLoad関数によって表示させる
                  機能を追加
                - SendMessage()関数がコールと同時に、最上段に「Now Printing…」
                  を表示したHTMLレイヤーを重ね、ページ全体をクリック不可として
                  印刷ボタンの2度押しを防ぐ機能を追加

               [User's Manual]
                - Star webPRNT Browser iOSの使い方を追加

 Ver 0.3.0
  2014/01/15 : [SDK]
                - UTF-8対応

               [User's Manual]
                - ドットプリンタ対応記載追加
                - UTF-8対応記載追加
                - "システム構成例 Star POSプリンター"にASR10記載追加
 Ver 0.2.0
  2013/11/07 : [SDK]
                - HTMLファイル内にてStarWebPRNTエンドポイントURLのデフォルト誤
                  記訂正

               [User's Manual]
                - ASR10記載追加

 Ver 0.1.0 
  2013/08/26 : 初版リリース