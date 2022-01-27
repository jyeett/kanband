class CategoriesController < ApplicationController
    skip_before_action :authorize
    
    def show
        all_categories = Category.all
        render json: all_categories, status: :ok
    end

    def create
        new_category = Category.create!(category_params)
        render json: new_category, status: :created
    end

    private
    def category_params
        params.permit(:type)
    end
end
