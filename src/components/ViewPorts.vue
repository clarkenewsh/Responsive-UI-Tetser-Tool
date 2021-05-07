<template>
  <section>
<!-- <form target="myFrame1" method="post">
			
  <label for="text">Enter website:</label>
  <input type="text" name="text" id="text">
			
  <input type="submit" value="post">
			
</form> -->
    
    <div>
       <h2>Mobile - 375 x 667</h2>
       <iframe id="mobile" src="" name="myFrame1"></iframe>
       <p><a href="https://portfolioclarke.netlify.app/" target="myFrame1">Open my porfolio in mobile view</a></p>
    </div>
    <div>
       <h2>Large mobile - 411 x 823</h2>
       <iframe id="large-mobile" src="" name="myFrame2"></iframe>
       <p><a href="https://goofy-hamilton-213075.netlify.app/projects/casestudy2/" target="myFrame2">Open my porfolio in large mobile view</a></p>
    </div>
    <div>
       <h2>Tablet - 1024 x 768</h2>
       <iframe id="tablet" src="" name="myFrame3"></iframe>
       <p><a href="https://goofy-hamilton-213075.netlify.app/projects/casestudy2/" target="myFrame3">Open my porfolio in large mobile view</a></p>
    </div>
    <div>
       <h2>Laptop - 1280 x 800</h2>
       <iframe id="laptop-small" src="https://www.google.co.uk/" name="myFrame4"></iframe>
       <p><a href="https://goofy-hamilton-213075.netlify.app/projects/casestudy2/" target="myFrame4">Open my porfolio in large mobile view</a></p>
    </div>
    <div>
       <h2>Desktop - 1680 x 1058</h2>
       <iframe id="desktop" src="https://www.google.co.uk/" name="myFrame4"></iframe>
       <p><a href="https://goofy-hamilton-213075.netlify.app/projects/casestudy2/" target="myFrame4">Open my porfolio in large mobile view</a></p>
    </div>
  </section>   
</template>

<script>
  export default {
    name: 'ViewPorts',
    props: {
      msg: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
}

#mobile {
  max-width: 375;
  height: 667px;
}

#large-mobile {
  max-width: 411px;
  height: 823px;
}

#tablet {
  max-width: 1024px;
  height: 768px;
}

#laptop-small{
  max-width: 1280px;
  height: 800px;
}

#desktop {
  max-width: 1680px;
  height: 1058px;
}

</style>