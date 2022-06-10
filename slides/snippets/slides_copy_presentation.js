// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// [START slides_copy_presentation]
function copyPresentation(presentationId, copyTitle, callback) {

  let request = {
    name: copyTitle
  };
  gapi.client.drive.files.copy({
    fileId: presentationId,
    resource: request
  }).then((driveResponse) => {
  try
  {
    let presentationCopyId = driveResponse.result.id;
    // [START_EXCLUDE silent]
    if(callback) callback(presentationCopyId);
    console.log("create copy_presentation with id",presentationCopyId);
   }
  catch(ex)
  {
   console.log("API returned an error in slides_copy_presentation",ex.message);
   return;
   }
    // [END_EXCLUDE]
  });
  // [END slides_copy_presentation]
}