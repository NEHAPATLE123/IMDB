 // alert("hello")
 
 let cl = console.log;
 
 let infotbody = document.getElementById("moviesInfo")
 cl(infotbody);
 
 const imgUrl="https://image.tmdb.org/t/p/w1280";
 
 let result = "";
 
 movieArr.forEach(function(movie){
	 result +=`<div class="col-md-3 " >
				<div class="card mb-4">
					<figure class="movieCard">
						<img src="${imgUrl}${movie.backdrop_path}" alt="${movie.title}" title="${movie.title}">
					    <figcaption class="text-white p-4 bg-dark">
						  <div class="row">
							<div class="col-sm-10">
								<h3>
								  ${movie.title}
								</h3>
							</div>
							<div class="col-md-2">
							  <span class="rating">
							     ${movie.vote_average}
							  </span>
							</div>
						  </div>
						</figcaption>
						<div class="overview bg-white p-4">
						   <h4>
               		    	   overview:
						   </h4>
						   <p>
						     ${movie.overview}
						   </p>
						</div>
					</figure>
				</div>
			</div>`;
	 
 });
 
 // cl(result);
 
infotbody.innerHTML = result;
 
 
 
 
 