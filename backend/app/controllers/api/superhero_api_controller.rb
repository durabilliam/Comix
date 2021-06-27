require 'dotenv'
API_KEY = ENV['SUPERHERO_API_KEY']

class Api::SuperHeroController < ApplicationController

  def get_superheros
    @url = "https://superheroapi.com/api"
    response = RestClient.get(@url,headers:{params:{apikey: => ENV['SUPERHERO_API_KEY']}})
    render json: response
  end



end