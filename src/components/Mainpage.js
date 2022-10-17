

const Mainpage = (_) => {
  return (
    <div className="page-wrap">
      <div className="page-container">
        <div className="inner-container">
          <div className="left-container">
            <img
              className="img-load"
              alt="img1"
              src="https://cdn.dribbble.com/uploads/9254/original/75295792f94f69858e1708053300087b.png?1585776057"
            ></img>
          </div>
          <div className="right-container">
            <header>
              <h1 className="title">
                How to get creative with your new Dribble Profile
              </h1>
              <p className="byline">
                by Renee Fleck in 
                <>{"\u00a0\u00a0"}</>
                <a href="https://dribbble.com/stories/categories/inspiration">
                Inspiration
                </a>
                <br></br>
                <span className="date">Apr 2, 2020</span>
              </p>
              <div className="button-container">
                <a className="facebook-btn" href="https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Fdribbble.com%252Fstories%252F2020%252F04%252F02%252Fget-creative-with-new-profiles%253Futm_source%253DFacebook_undefined%2526utm_campaign%253Dundefined%2526utm_content%253Dundefined%2526utm_medium%253DSocial_Share&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=en_GB">
                <svg xmlns="http://www.w3.org/2000/svg" aria-labelledby="aripuwv8o1m79ug8uu78ilp5z8f3snc" role="img" viewBox="0 0 24 24" class="icon "><title id="aripuwv8o1m79ug8uu78ilp5z8f3snc">Facebook icon</title><path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0"></path></svg>
                    Share
                </a>

                <a className="twitter-btn" href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fdribbble.com%2Fstories%2F2020%2F04%2F02%2Fget-creative-with-new-profiles%3Futm_source%3DTwitter_undefined%26utm_campaign%3Dundefined%26utm_content%3Dundefined%26utm_medium%3DSocial_Share&text=%22How%20to%20get%20creative%20with%20your%20new%20Dribbble%20Profile%20%22">
                <svg xmlns="http://www.w3.org/2000/svg" aria-labelledby="a88iwzwsihsv8qpha43lmxaurh6bpxqq" role="img" viewBox="0 0 24 24" class="icon "><title id="a88iwzwsihsv8qpha43lmxaurh6bpxqq">Twitter icon</title><path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"></path></svg>
                    Tweet
                </a>

                <a className="linkedin-btn" href="https://www.linkedin.com/shareArticle?mini=true&url=https://dribbble.com/stories/2020/04/02/get-creative-with-new-profiles&title=%22How%20to%20get%20creative%20with%20your%20new%20Dribbble%20Profile%20%22&summary=%22How%20to%20get%20creative%20with%20your%20new%20Dribbble%20Profile%20%22&source=Dribbble">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414" role="img" class="icon "><path d="M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.778h-2.37V6H8.51V7.04h.03c.318-.6 1.092-1.233 2.247-1.233 2.4 0 2.845 1.58 2.845 3.637v4.188zM3.558 4.955c-.762 0-1.376-.617-1.376-1.377 0-.758.614-1.375 1.376-1.375.76 0 1.376.617 1.376 1.375 0 .76-.617 1.377-1.376 1.377zm1.188 8.68H2.37V6h2.376v7.635zM14.816 0H1.18C.528 0 0 .516 0 1.153v13.694C0 15.484.528 16 1.18 16h13.635c.652 0 1.185-.516 1.185-1.153V1.153C16 .516 15.467 0 14.815 0z" fill-rule="nonzero"></path></svg>
                    Share
                </a>

                <a className="copy-btn" href="https://dribbble.com/stories/2020/04/02/get-creative-with-new-profiles">
                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon "><path d="m7.438 16.562c.293.293.677.44 1.061.44s.768-.147 1.061-.44l7.002-7.002c.586-.586.586-1.536 0-2.122s-1.536-.586-2.122 0l-7.002 7.002c-.586.586-.586 1.536 0 2.122zm3.501 3.078c-1.813 1.814-4.765 1.814-6.58 0-1.814-1.814-1.814-4.765 0-6.579l3.29-3.29-2.121-2.121-3.29 3.29c-2.984 2.984-2.984 7.839 0 10.823 1.492 1.491 3.452 2.237 5.412 2.237s3.92-.746 5.411-2.238l3.29-3.29-2.122-2.122zm10.823-17.402c-2.983-2.984-7.839-2.984-10.823 0l-3.29 3.29 2.122 2.122 3.29-3.29c.907-.907 2.098-1.36 3.289-1.36s2.383.454 3.29 1.361c1.814 1.814 1.814 4.765 0 6.579l-3.29 3.29 2.122 2.122 3.29-3.29c2.984-2.985 2.984-7.84 0-10.824z"></path></svg>
                    Copy
                </a>
              </div>
            </header>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
