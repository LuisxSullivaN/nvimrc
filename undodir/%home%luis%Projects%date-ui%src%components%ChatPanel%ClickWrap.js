Vim�UnDo� 4.����I	�2�� v��_��m��ۦ����   8                                 `�E�    _�                        O    ����                                                                                                                                                                                                                                                                                                                                                             `���     �         0      Wconst ClickWrap = ({ accountId, clickWrapId, userEmail, baseUrl, handleOnAgreed }) => {5��       O               
   �               
       �       Q              	   �              	       �       Q       	       
   �       	       
       �       Q       
       
   �       
       
       �       Q       
          �       
              5�_�                       `    ����                                                                                                                                                                                                                                                                                                                                                             `���     �       5   0   .   import React from "react";   #import PropTypes from "prop-types";       iconst ClickWrap = ({ accountId, clickWrapId, userEmail, baseUrl, handleOnAgreed, handleOnDeclined }) => {       
  return (        <div className="form-group">   -      {window.docuSignClick.Clickwrap.render(   	        {             environment: baseUrl,             accountId: accountId,   #          clickwrapId: clickWrapId,   �          // Adding randomness here to support using the same email twice. Normally, if you accepted a clickwrap, you won't see it a second time   "          clientUserId: userEmail,   %          // clientUserId: userEmail,   %          // onMustAgree(agreement) {   �          //   // Called when no users have previously agreed by the above client user ID for the most recent required Clickwrap version             // },                 onAgreed(agreement) {   �            // Called when either 1) the clientUserId has previously agreed 2) the clientUserId has clicked agree and completed successfully               setTimeout(() => {   /              document.body.style.overflow = ''                 handleOnAgreed()               }, 1000)             },       !          onDeclined(agreement) {   E            // Called when the clientUserId has declined successfully               setTimeout(() => {   /              document.body.style.overflow = ''               }, 1000)             }   
        },           "#ds-terms-of-service"         )}   
    </div>     );   };       ClickWrap.propTypes = {   )  accountId: PropTypes.string.isRequired,   +  clickWrapId: PropTypes.string.isRequired,   )  userEmail: PropTypes.string.isRequired,   '  baseUrl: PropTypes.string.isRequired,   };5��            .       4               -      2      5�_�                    %   .    ����                                                                                                                                                                                                                                                                                                                                                             `���    �   %   '   7                    �   %   '   6    5��    %                                           �    %                                          �    %                                        �    %                                        �    %                                        �    %                                        �    %                                        �    %                                           5�_�                          ����                                                                                                                                                                                                                                                                                                                                                             `�E�    �         8       �         7    5��                          �                      �                          �                      �                      	   �              	       �                        �                     �                        �                     �                        �                     5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `�E�    �         8      console.log(handleOnAgreed)5��                         �                      �                         �                      �                         �                      �                         �                      �                         �                      �                         �                      �                         �                      �                         �                      �                        �                     �                         �                      �                         �                      �                         �                      �                         �                      �                         �                      �                         �                      �                         �                      �                        �                     5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `�D�     �         7       �         8      
console.lo5��                          �                      �                          �                      �                         �                     �                         �                     �                         �                     �                         �                     �                      	   �              	       �                        �                     �                        �                     5��