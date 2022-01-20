class TeamsController < ApplicationController
    def index
        teams = Team.all
        render json: teams, status: :ok
    end

    def create
        new_member = Team.create!(team_params)
        render json: new_member, status: :created
    end

    private
    def team_params
        params.permit(:user_id, :project_id)
    end
end
