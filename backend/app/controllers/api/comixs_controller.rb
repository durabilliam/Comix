class Api::ComixsController < ApplicationController
  # API_KEY = ENV['SUPERHERO_API_KEY']
  # def get_superheros
  #   @url = "https://superheroapi.com/api/#{API_KEY}/195"
  #   #@url = "https://superheroapi.com/api//100/powerstats"
  #   response = RestClient.get(@url)
  #   #,headers:{params:{apikey: => ENV['SUPERHERO_API_KEY']}})
  #   render json: response
  # end

  def get_comixs
    @url = "https://my-comix-api.herokuapp.com/comicbooks"
    #@url = "https://superheroapi.com/api//100/powerstats"
    response = RestClient.get(@url)
    #,headers:{params:{apikey: => ENV['SUPERHERO_API_KEY']}})
    render json: response
  end



end