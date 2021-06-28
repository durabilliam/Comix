class Api::SuperherosController < ApplicationController
  API_KEY = ENV['SUPERHERO_API_KEY']
  put API_KEY
  def get_superheros
    @url = "https://superheroapi.com/api/ENV[`API_KEY`]/100/powerstats"
    #@url = "https://superheroapi.com/api//100/powerstats"
    response = RestClient.get(@url)
    #,headers:{params:{apikey: => ENV['SUPERHERO_API_KEY']}})
    render json: response
  end



end