<style>
/* Wrapper */
    .wrapper {
        display: flex;
        flex-flow: column nowrap;
        font-family: "Sofia", Arial, Helvetica;
        background: hsl(0, 0%, 90%);
        text-align: center;
        justify-content:space-evenly;
        align-content: center;
        justify-items: center;
        align-items: center;
    }
/* ReadMe Title */
    .readme-title {
        color: white;
        font-size: 15px;
        font-weight: 400;
        background: rgb(13, 34, 39);
        padding: 10px;
        border-top-right-radius: 6px;
        border-top-left-radius: 6px;
        margin-bottom: 0;
        text-align: center;
    }
    .readme-subtitle {
        font-size: 25px;
        font-weight: 400;
    }
    .text {
        color: rgb(13, 34, 39);
    }
    .note-text {
        padding: 0 2rem;
    }
    .overview-text,
    .header {
        text-align: center;
    }
    .meet-the-team {
        display: flex;
        width: 100%;
        font-weight: 800;
        font-size: 25px;
        justify-content: center;
        justify-items: center;
        align-items: center;
        align-content: center
    }
    .header {
        margin-top: 1rem;
        display: flex;
        width: 100%;
        font-weight: 800;
        font-size: 25px;
        justify-content: center;
        justify-items: center;
        align-items: center;
        align-content: center
    }
/* Contributor Container */
    .contributor-container {
        display: flex;
        flex-flow: row;
        justify-content: space-evenly;
        align-content: center;
    }
<!-- /* Photo Styling */ -->
    .contain {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-content: center;
        margin: 1rem;
        text-align: center
    }
    .photo-contain {
        display: flex;
        width: 100%;
        justify-content: center;
        justify-items: center;
        align-items: center;
        align-content: center
    }
    .photo {
        height: 75px;
        width: 75px;
        transition: .35s;
        cursor: pointer;
        border-radius: 25rem;
        border: 2px solid rgb(13, 34, 39);
        margin: .5rem;
        object-fit: contain;
    }
    .photo:hover {
        box-shadow: 3px 3px 8px rgb(13, 34, 39);
    }
    .name {
        font-weight: 550;
        font-size: small;
    }
</style>
<body class="wrapper">
    <div class="readme-title">
        Nashville Software School
        <div class="readme-subtitle">
            Cohort 42 Class Website
        </div>
    </div>
    <div class="text header">
            Contributors
    </div>
    <div class="contributor-container">
        <div class="contain">
            <div class="photo-contain">
                <a
                href="https://github.com/ConnorBlakeney"
                target="_blank"
                class="photo-link"
                title="Click to see Connor's GitHub!">
                    <img
                    class="photo"
                    src="images/classmates/ConnorBlakeney.png"/>
                </a>
            </div>
            <p class="name text">
                Connor Blakeney
            </p>
        </div>
        <div class="contain">
            <div class="photo-contain">
                <a
                href="https://github.com/egeehartz"
                target="_blank"
                class="photo-link"
                title="Click to see Emily's GitHub!">
                    <img
                    class="photo"
                    src="images/classmates/EmilyHartzell.png"/>
                </a>
            </div>
            <p class="name text">
                Emily Hartzell
            </p>
        </div>
        <div class="contain">
            <div class="photo-contain">
                <a
                href="https://github.com/mgjeffries"
                target="_blank"
                class="photo-link"
                title="Click to see Gib's GitHub!">
                    <img
                    class="photo"
                    src="images/classmates/GibJeffries.png"/>
                </a>
            </div>
            <p class="name text">
                Gib Jeffries
            </p>
        </div>
        <div class="contain">
            <div class="photo-contain">
                <a
                href="https://github.com/christopherjohnson1"
                target="_blank"
                class="photo-link"
                title="Click to see Chris's GitHub!">
                    <img
                    class="photo"
                    src="images/classmates/ChrisJohnson.png"/>
                </a>
            </div>
            <p class="name text">
                Chris Johnson
            </p>
        </div>
        <div class="contain">
            <div class="photo-contain">
                <a
                href="https://github.com/heymonicakay"
                target="_blank"
                class="photo-link"
                title="Click to see Monica's GitHub!">
                    <img
                    class="photo"
                    src="images/classmates/MonicaKayProvence.png"/>
                </a>
            </div>
            <p class="name text">
                Monica Kay Provence
            </p>
        </div>
    </div>
</body>
