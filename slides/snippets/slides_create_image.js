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
function createImage(presentationId, pageId, IMAGE_URL,callback) {

  var imageUrl = IMAGE_URL;
  // [START slides_create_image]
  // Create a new image, using the supplied object ID, with content downloaded from imageUrl.
  var requests = [];
  var imageId = 'MyImage_02';
  var emu4M = {
    magnitude: 4000000,
    unit: 'EMU'
  };
  requests.push({
    createImage: {
      objectId: imageId,
      url: imageUrl,
      elementProperties: {
        pageObjectId: pageId,
        size: {
          height: emu4M,
          width: emu4M
        },
        transform: {
          scaleX: 1,
          scaleY: 1,
          translateX: 100000,
          translateY: 100000,
          unit: 'EMU'
        }
      }
    }
  });

  // Execute the request.
  gapi.client.slides.presentations.batchUpdate({
    presentationId: presentationId,
    requests: requests
  }).then((response) => { try{
    var createImageResponse = response.result.replies;
    console.log(`Created image with ID: ${createImageResponse[0].createImage.objectId}`);
    // [START_EXCLUDE silent]
    if(callback) callback(createImageResponse);
    } catch(ex){console.log(ex.message)}
    // [END_EXCLUDE]
  });
  // [END slides_create_image]
}