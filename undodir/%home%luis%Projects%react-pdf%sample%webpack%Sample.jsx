Vim�UnDo� ��m�,'<^e���m�3l7�"-����T�i              2      1       1   1   1    `xbo    _�                    ,        ����                                                                                                                                                                                                                                                                                                                            ,          /          V       `x_�     �   +   ,                      {                 Array.from(   $                new Array(numPages),                    (el, index) => (5��    +                      o      n               5�_�                    0        ����                                                                                                                                                                                                                                                                                                                            0          2          V       `x_�     �   /   0                          ),                 )               }5��    /                      �      1               5�_�                    ,       ����                                                                                                                                                                                                                                                                                                                            0          0          V       `x_�     �       .   5   4   (import React, { useState } from 'react';   Bimport { Document, Page } from 'react-pdf/dist/esm/entry.webpack';   5import 'react-pdf/dist/esm/Page/AnnotationLayer.css';       import './Sample.less';       const options = {     cMapUrl: 'cmaps/',     cMapPacked: true,   };       "export default function Sample() {   3  const [file, setFile] = useState('./sample.pdf');   1  const [numPages, setNumPages] = useState(null);          function onFileChange(event) {   #    setFile(event.target.files[0]);     }       >  function onDocumentLoadSuccess({ numPages: nextNumPages }) {       setNumPages(nextNumPages);     }       
  return (       <div className="Example">         <header>   &        <h1>react-pdf sample page</h1>         </header>   *      <div className="Example__container">   2        <div className="Example__container__load">   7          <label htmlFor="file">Load from file:</label>             {' '}             <input   #            onChange={onFileChange}               type="file"             />           </div>   6        <div className="Example__container__document">             <Document               file={file}   1            onLoadSuccess={onDocumentLoadSuccess}               options={options}             >                     <Page   -                    key={`page_${index + 1}`}   *                    pageNumber={index + 1}                     />             </Document>           </div>         </div>   
    </div>     );5��            4       -               7      �      5�_�      	              (       ����                                                                                                                                                                                                                                                                                                                            (          (   +       v   +    `x_�     �   '   )   .      E            <Page key={`page_${index + 1}`} pageNumber={index + 1} />5��    '                     J                     5�_�      
           	   (   %    ����                                                                                                                                                                                                                                                                                                                            (          (   +       v   +    `x_�    �   '   )   .      +            <Page pageNumber={index + 1} />5��    '   $                  \                     �    '   #                  [                     �    '   "                  Z                     �    '   "                  Z                     �    '   !                  Y                     �    '                      X                     �    '                     W                     �    '                     V                     5�_�   	              
           ����                                                                                                                                                                                                                                                                                                                                      !          V       `x_�    �                2        <div className="Example__container__load">   <          <label htmlFor="file">Load from file:</label>{' '}   7          <input onChange={onFileChange} type="file" />           </div>5��                          �      �               5�_�   
                        ����                                                                                                                                                                                                                                                                                                                                                V       `x_�     �                *      <div className="Example__container">   6        <div className="Example__container__document">5��                          �      b               5�_�                    $        ����                                                                                                                                                                                                                                                                                                                            $          %          V       `x_�     �   #   $                  </div>         </div>5��    #                      Y                     5�_�                       	    ����                                                                                                                                                                                                                                                                                                                            $          $          V       `x`    �      $   &                <Document               file={file}   1            onLoadSuccess={onDocumentLoadSuccess}               options={options}             >   #            <Page pageNumber={1} />             </Document>5��                         �      �       �       5�_�                            ����                                                                                                                                                                                                                                                                                                                               	          	       V   	    `xa�     �                    <div className="Example">         <header>   &        <h1>react-pdf sample page</h1>         </header>5��                          3      d               5�_�                        	    ����                                                                                                                                                                                                                                                                                                                               	          	       V   	    `xa�     �                 
    </div>5��                          �                     5�_�      /                     ����                                                                                                                                                                                                                                                                                                                               	          	       V   	    `xa�   
 �          !            <Document           file={file}   -        onLoadSuccess={onDocumentLoadSuccess}           options={options}         >           <Page pageNumber={1} />         </Document>5��                         3      �       �       5�_�      0          /           ����                                                                                                                                                                                                                                                                                                                                                V       `xbg    �                   function onFileChange(event) {   "    setFile(event.target.files[0])     }5��                          }      H               5�_�   /   1           0           ����                                                                                                                                                                                                                                                                                                                                                V       `xbk    �                +      onLoadSuccess={onDocumentLoadSuccess}5��                                ,               5�_�   0               1           ����                                                                                                                                                                                                                                                                                                                                                V       `xbn    �                      options={options}5��                                               5�_�      $      /             ����                                                                                                                                                                                                                                                                                                                                                V       `xa�     �          !      import React from 'react'5��                                                5�_�      %          $           ����                                                                                                                                                                                                                                                                                                                                                  V        `xb     �              5��                          =      1               5�_�   $   &           %           ����                                                                                                                                                                                                                                                                                                                                                  V        `xb     �              5��                          >      H               5�_�   %   '           &           ����                                                                                                                                                                                                                                                                                                                                                  V        `xb     �              5��                          ?      a               5�_�   &   (           '           ����                                                                                                                                                                                                                                                                                                                                                  V        `xb     �              5��                          ?                     5�_�   '   )           (           ����                                                                                                                                                                                                                                                                                                                                                  V        `xb     �              5��                          j      ,               5�_�   (   *           )           ����                                                                                                                                                                                                                                                                                                                                       	           V        `xb     �              5��                          j                     5�_�   )   +           *           ����                                                                                                                                                                                                                                                                                                                                                  V        `xb!     �      
        5��                          �       :               5�_�   *   ,           +           ����                                                                                                                                                                                                                                                                                                                                                  V        `xb"     �              5��                          �                      5�_�   +   -           ,           ����                                                                                                                                                                                                                                                                                                                                                  V        `xb#    �              5��                          �                      5�_�   ,   .           -   
        ����                                                                                                                                                                                                                                                                                                                                                  V        `xb-     �   	           5��    	                                           5�_�   -               .      2    ����                                                                                                                                                                                                                                                                                                                                                  V        `xb0   	 �      	         3  const [file, setFile] = useState('./sample.pdf');5��       2                  �                      5�_�             $              ����                                                                                                                                                                                                                                                                                                                                                  V        `xa�     �              5��                          
      d               5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        `xa�     �              5��                                D               5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        `xa�     �              5��                                a               5�_�                             ����                                                                                                                                                                                                                                                                                                                                                  V        `xa�     �              5��                          <      ,               5�_�      !                       ����                                                                                                                                                                                                                                                                                                                                       	           V        `xa�     �              5��                          <                     5�_�       "           !           ����                                                                                                                                                                                                                                                                                                                                                  V        `xa�     �      
        5��                          �       :               5�_�   !   #           "           ����                                                                                                                                                                                                                                                                                                                                                  V        `xa�     �              5��                          �                      5�_�   "               #           ����                                                                                                                                                                                                                                                                                                                                                  V        `xa�    �              5��                          �                      5�_�                          ����                                                                                                                                                                                                                                                                                                                                                V       `xa�     �               5��                                   (               5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        `xa�     �              5��                          U      H               5�_�                           ����                                                                                                                                                                                                                                                                                                                                                  V        `xa�     �              5��                          �      D               5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        `xa�     �              5��                          V      a               5�_�                            ����                                                                                                                                                                                                                                                                                                                                       	           V        `xa�     �              5��                          �       d               5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `xa�    �      
        5��                          �       <               5�_�                             ����                                                                                                                                                                                                                                                                                                                                                             `xa�     �                 �                	import Re5��                                                  �                                                  �                                                �                                                �                                                �                       	                  	       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        `xa�     �              5��                          �       d               5�_�   
                       ����                                                                                                                                                                                                                                                                                                                                                V       `x_�     �              5��                          �      7               5�_�                     %       ����                                                                                                                                                                                                                                                                                                                                                V       `x_�    �   $   &        5��    $                      �                     5�_�                    ,       ����                                                                                                                                                                                                                                                                                                                            2          0          V       `x_�     �   +   0        5��    +                      o      n               5�_�                    0       ����                                                                                                                                                                                                                                                                                                                            0          0          V       `x_�     �   /   3        5��    /                      �      1               5�_�                    -       ����                                                                                                                                                                                                                                                                                                                            /          /          V       `x_�     �   ,   .        5��    ,                      �      .               5�_�                     -       ����                                                                                                                                                                                                                                                                                                                            .          .          V       `x_�     �   ,   .        5��    ,                      �      +               5��